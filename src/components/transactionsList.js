import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TransactionCard from './transactionCard'
import StyledUL from './styled/StyledUnorderedList'

const NavigationButtonDock = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;

    span {
        width: 200px;
        text-align: center;
    }
`;

const NavigationButton = styled.button`
    border: none;
    text-decoration: underline;

    :hover {
        text-decoration: none;
        color: #82204A;
    }

    :focus {
        outline: 0;
    }
`;

class TransactionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0,
            endIndex: 10,
            pageSize: 10,
        }
    }

    nextPage = e => {
        if (this.state.endIndex + this.state.pageSize < this.props.transactions.length) {
            this.setState(prevState => ({ startIndex: prevState.startIndex + prevState.pageSize, endIndex: prevState.endIndex + prevState.pageSize}))
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
            this.setState(prevState => ({ startIndex: prevState.startIndex - prevState.pageSize, endIndex: prevState.endIndex - (this.props.transactions.length % prevState.pageSize)}))
        } else {
            this.setState(prevState => ({ startIndex: prevState.startIndex - prevState.pageSize, endIndex: prevState.endIndex - prevState.pageSize}))
        }
    }

    adjustEndIndex = () => {
        if(this.state.endIndex > this.props.transactions.length) {
            this.setState({ endIndex: this.props.transactions.length })
        } 
    }

    render() {
        if (this.props.transactions) {
            this.adjustEndIndex()
            return (
                <div className="TransactionsList">
                    <NavigationButtonDock>
                        <NavigationButton onClick={this.prevPage} active={!(this.state.startIndex === 0)}>Back</NavigationButton>
                        <span>Showing {this.state.startIndex + 1} - {this.state.endIndex} of {this.props.transactions.length}</span>
                        <NavigationButton onClick={this.nextPage} active={!(this.state.endIndex === this.props.transactions.length)}>Next</NavigationButton>
                    </NavigationButtonDock>
                    <span>Number of transactions: {this.props.transactions.length}</span>
                    <StyledUL>
                        {this.props.transactions.slice(this.state.startIndex, this.state.endIndex).map(function (transaction, index) {
                            return (
                                <li key={transaction.transactionId}>
                                    <TransactionCard info={transaction} />
                                </li>
                            )
                        })}
                    </StyledUL>
                    <NavigationButtonDock>
                        <NavigationButton onClick={this.prevPage} active={!(this.state.startIndex === 0)}>Back</NavigationButton>
                        <span>Showing {this.state.startIndex + 1} - {this.state.endIndex} of {this.props.transactions.length}</span>
                        <NavigationButton onClick={this.nextPage} active={!(this.state.endIndex === this.props.transactions.length)}>Next</NavigationButton>
                    </NavigationButtonDock>
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