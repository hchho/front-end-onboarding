import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TransactionCard from './transactionCard'
import CardDetailWrapper from './styled/CardDetailWrapper'
import CardWrapper from './styled/CardWrapper'
import StyledUL from './styled/StyledUnorderedList'
import StyledCard from './styled/StyledCard'
import NavigationButtonDock from './NavigationButtonDock'

const CardHeaderWrapper = styled(CardDetailWrapper)`
flex-basis: 0;
padding: 10;
justify-content: center;
align-items: center;
flex-direction: column;
font-weight: bold;
`
const DEFAULT_PAGE_SIZE = 10;

class TransactionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0,
            endIndex: DEFAULT_PAGE_SIZE,
            pageSize: DEFAULT_PAGE_SIZE,
            accounts: this.props.accounts
        }
    }

    static getDerivedStateFromProps(props, state) {
        return state
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if (prevState.endIndex < DEFAULT_PAGE_SIZE) {
            this.setState({ endIndex: DEFAULT_PAGE_SIZE })
        }
        if (this.state.endIndex > this.props.transactions.length) {
            this.setState({ endIndex: this.props.transactions.length })
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

    getNavState = () => {
        return {
            prevPageFunc: this.prevPage,
            nextPageFunc: this.nextPage,
            prevButtonState: this.state.startIndex === 0,
            nextButtonState: this.state.endIndex === this.props.transactions.length,
            startIndex: this.state.startIndex + 1,
            endIndex: this.state.endIndex,
            totalLength: this.props.transactions.length
        }
    }

    render() {
        if (this.props.transactions && (this.state.accounts && this.state.accounts.length > 0)) {
            return (
                <div className="TransactionsList">
                    <NavigationButtonDock {...this.getNavState()} />
                    <StyledUL>
                        <li key='-1'>
                            <StyledCard className="TransactionHeader">
                                <CardWrapper>
                                    <CardHeaderWrapper>
                                        Date
                                    </CardHeaderWrapper>
                                    <CardHeaderWrapper>
                                        Description
                                    </CardHeaderWrapper>
                                    <CardHeaderWrapper>
                                        Category
                                    </CardHeaderWrapper>
                                    <CardHeaderWrapper>
                                        Amount transferred
                                    </CardHeaderWrapper>
                                    <CardHeaderWrapper>
                                        Running balance
                                    </CardHeaderWrapper>
                                </CardWrapper>
                            </StyledCard>
                        </li>
                        {this.props.transactions.slice(this.state.startIndex, this.state.endIndex).map((transaction, index) => {
                            return (
                                <li key={transaction.transactionId}>
                                    <TransactionCard info={transaction} accountName={this.state.accounts.find(acc => acc.accountId === transaction.accountId).accountName} />
                                </li>
                            )
                        })}
                    </StyledUL>
                    <NavigationButtonDock {...this.getNavState()} />
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
    ),
    accounts: PropTypes.array.isRequired
}

export default TransactionsList