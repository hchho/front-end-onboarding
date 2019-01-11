import React, { Component } from 'react';
import AccountsPanel from './accountsPanel'
import SummaryPanel from './summaryPanel'
import TransactionPanel from './transactionsPanel'
import StyledDashBoard from './styled/DashBoard';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: this.props.accounts
        }
    }

    getTotalBalance = (total, num) => {
        return total + num
    }

    render() {
        if (this.state.accounts.length > 0) {
            return (
                <StyledDashBoard>
                    <SummaryPanel header='Summary' {...{ totalBalance: this.state.accounts.map(acc => acc.balance).reduce(this.getTotalBalance), ...this.props}} />
                    <AccountsPanel accounts={this.state.accounts} header='Accounts' />
                    <TransactionPanel header='Transactions' />
                </StyledDashBoard>
            )
        } else {
            return (<span>Loading dashboard...</span>)
        }    
    }
}


export default DashBoard