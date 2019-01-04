import React, { Component } from 'react';
import transactionServices from './../services/transactionsServices';
import TransactionsList from './transactionsList'
// import VisibleTransactions from '../containers/VisibleTransactions'
import ControlPanel from './controlPanel'

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(transactionServices.getTransactions());
    }
    render() {
        return (
            <div className="DashBoard">
                <ControlPanel />
                <p>
                    Earliest transaction date: {this.state.earliestTransactionDate}
                </p>
                <p>
                    Latest transaction date: {this.state.latestTransactionDate}
                </p>
                <p>
                    Days span by transaction: {this.state.daysSpanByTransaction}
                </p>
                <p>
                    Transaction count: {this.state.transactionCount}
                </p>
                <p>
                    Total balance: 
                </p>
                <p>
                    Transactions: <TransactionsList transactions={this.state.transactions}/>
                </p>
            </div>
        );
    }
}

export default DashBoard