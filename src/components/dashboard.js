import React, { Component } from 'react';
import TransactionsList from './transactionsList'
// import VisibleTransactions from '../containers/VisibleTransactions'
import ControlPanel from './controlPanel'

const ASCENDING_DATE = 'ascending'
const DESCENDING_DATE = 'descending'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: ASCENDING_DATE,
            transactionDetails: props,
            transactions: props.transactions
        }
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleSortChange(event) {
        var sortedTransactions;
        if (event.target.value === ASCENDING_DATE) {
            sortedTransactions = this.state.transactions.sort((a, b) => {
                return new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime()
            })
        } else {
            sortedTransactions = this.state.transactions.sort((a, b) => {
                return new Date(a.transactionDate).getTime() - new Date(b.transactionDate).getTime()
            })
        }
        this.setState({ sortBy: event.target.value, transactions: sortedTransactions })
    }

    render() {
        return (
            <div className="DashBoard">
                <ControlPanel />
                <p>
                    Earliest transaction date: {this.state.transactionDetails.earliestTransactionDate}
                </p>
                <p>
                    Latest transaction date: {this.state.transactionDetails.latestTransactionDate}
                </p>
                <p>
                    Days span by transaction: {this.state.transactionDetails.daysSpanByTransaction}
                </p>
                <p>
                    Transaction count: {this.state.transactionDetails.transactionCount}
                </p>
                <div>
                    Sort by date: <select value={this.state.sortBy} onChange={this.handleSortChange}>

                        <option value={ASCENDING_DATE}>newest to oldest</option>
                        <option value={DESCENDING_DATE}>oldest to newest</option>
                    </select>
                </div>
                <p>
                    Transactions: <TransactionsList transactions={this.state.transactions} />
                </p>
            </div>
        )
    }
}


export default DashBoard