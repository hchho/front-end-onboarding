import React from 'react';
import TransactionsList from './transactionsList'
// import VisibleTransactions from '../containers/VisibleTransactions'
import ControlPanel from './controlPanel'

const DashBoard = ({ props }) => (
    <div className="DashBoard">
        <ControlPanel />
        <p>
            Earliest transaction date: {props.earliestTransactionDate}
        </p>
        <p>
            Latest transaction date: {props.latestTransactionDate}
        </p>
        <p>
            Days span by transaction: {props.daysSpanByTransaction}
        </p>
        <p>
            Transaction count: {props.transactionCount}
        </p>
        <p>
            Total balance:
                </p>
        <p>
            Transactions: <TransactionsList transactions={props.transactions}/>
        </p>
    </div>
);

export default DashBoard