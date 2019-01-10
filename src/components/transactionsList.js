import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TransactionCard from './transactionCard'
import StyledUL from './styled/StyledUnorderedList'

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

    render() {
        if (this.props.transactions) {
            return (
                <div className="TransactionsList">
                    <div>
                        <button onClick={this.prevPage}>Back</button>Showing {this.state.startIndex + 1} - {this.state.endIndex} of {this.props.transactions.length}<button onClick={this.nextPage}>Next</button>
                    </div>
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
                </div>
            )
        } else {
            return (<span>Loading...</span>)
        }
    }
}
// const TransactionsList = ({ transactions }) => {
//     if (transactions) {
//         return (
//             <div className="TransactionsList">
//                 <span>Number of transactions: { transactions.length }</span>
//                 <StyledUL>
//                     {transactions.map(function (transaction, index) {
//                         return (
//                             <li key={transaction.transactionId}>
//                                 <TransactionCard info={transaction} />
//                             </li>
//                         )
//                     })}
//                 </StyledUL>
//             </div>
//         )
//     } else {
//         return (<span>Loading...</span>)
//     }
// }

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