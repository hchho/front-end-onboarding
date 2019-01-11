import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TransactionCard from './transactionCard'
import StyledUL from './styled/StyledUnorderedList'
import NavigationButtonDock from './NavigationButtonDock'


class TransactionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0,
            endIndex: 10,
            pageSize: 10,
            accounts: this.props.accounts
        }
    }

    nextPage = e => {
        if (this.state.endIndex + this.state.pageSize < this.props.transactions.length) {
            this.setState(prevState => ({ startIndex: prevState.startIndex + prevState.pageSize, endIndex: prevState.endIndex + prevState.pageSize }))
        } else if (this.state.endIndex === this.props.transactions.length) {
            return
        } else {
            this.setState(prevState => ({ startIndex: prevState.startIndex + prevState.pageSize, endIndex: this.props.transactions.length }))
        }
    }

    prevPage = e => {
        if (this.state.startIndex === 0) {
            return
        } else if (this.state.endIndex === this.props.transactions.length) {
            this.setState(prevState => ({ startIndex: prevState.startIndex - prevState.pageSize, endIndex: prevState.endIndex - (this.props.transactions.length % prevState.pageSize) }))
        } else {
            this.setState(prevState => ({ startIndex: prevState.startIndex - prevState.pageSize, endIndex: prevState.endIndex - prevState.pageSize }))
        }
    }

    adjustEndIndex = () => {
        if (this.state.endIndex > this.props.transactions.length) {
            this.setState({ endIndex: this.props.transactions.length })
        }
    }

    render() {
        if (this.props.transactions && (this.state.accounts && this.state.accounts !== [])) {
            this.adjustEndIndex()
            return (
                <div className="TransactionsList">
                    <NavigationButtonDock
                        prevPageFunc={this.prevPage}
                        nextPageFunc={this.nextPage}
                        prevButtonState={this.state.startIndex === 0}
                        nextButtonState={this.state.endIndex === this.props.transactions.length}
                        startIndex={this.state.startIndex + 1}
                        endIndex={this.state.endIndex}
                        totalLength={this.props.transactions.length}
                    />
                    <StyledUL>
                        {this.props.transactions.slice(this.state.startIndex, this.state.endIndex).map((transaction, index) => {
                            return (
                                <li key={transaction.transactionId}>
                                    <TransactionCard info={transaction} accountName={this.state.accounts.find(acc => acc.accountId === transaction.accountId).accountName} />
                                </li>
                            )
                        })}
                    </StyledUL>
                    <NavigationButtonDock
                        prevPageFunc={this.prevPage}
                        nextPageFunc={this.nextPage}
                        prevButtonState={this.state.startIndex === 0}
                        nextButtonState={this.state.endIndex === this.props.transactions.length}
                        startIndex={this.state.startIndex + 1}
                        endIndex={this.state.endIndex}
                        totalLength={this.props.transactions.length}
                    />
                </div>
            )
        } else {
            return (<span>Loading...</span>)
        }
    }
}

TransactionsList.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            info: PropTypes.shape({
                accountId: PropTypes.string.isRequired,
                transactionDate: PropTypes.string.isRequired,
                desc: PropTypes.string,
                amount: PropTypes.number.isRequired,
                withdrawal: PropTypes.number,
                deposit: PropTypes.number,
                runningBalance: PropTypes.number.isRequired,
                category: PropTypes.string,
                transactionId: PropTypes.string.isRequired
            })
        }).isRequired
    ).isRequired
}

export default TransactionsList