import React, { Component } from 'react';
import VisibleTransactions from '../containers/VisibleTransactions'
import FilterPanel from './filterPanel'
import AccountsList from './accountsList'
import StyledDashBoard from './styled/DashBoard';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionDetails: props
        }
    }

    render() {
        return (
            <StyledDashBoard>
                <FilterPanel />
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
                    Total transactions: {this.state.transactionDetails.transactionCount}
                </p>
                <div>
                    Accounts: <AccountsList />
                </div>
                <p>
                    Transactions: <VisibleTransactions />
                </p>
            </StyledDashBoard>
        )
    }
}


export default DashBoard