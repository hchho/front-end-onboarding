import React, { Component } from 'react';
import AccountsPanel from './accountsPanel'
import SummaryPanel from './summaryPanel'
import TransactionPanel from './transactionsPanel'
import StyledDashBoard from './styled/DashBoard';

class DashBoard extends Component {
    render() {
        return (
            <StyledDashBoard>
                <SummaryPanel header='Summary' {...this.props} />
                <AccountsPanel header='Accounts' />
                <TransactionPanel header='Transactions' />
            </StyledDashBoard>
        )
    }
}


export default DashBoard