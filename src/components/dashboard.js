import React, { Component } from 'react';
import AccountsPanel from './accountsPanel'
import SummaryPanel from './summaryPanel'
import TransactionPanel from './transactionsPanel'
import StyledDashBoard from './styled/DashBoard';

class DashBoard extends Component {
    render() {
        return (
            <StyledDashBoard>
                <SummaryPanel {...this.props} />
                <AccountsPanel />
                <TransactionPanel />
            </StyledDashBoard>
        )
    }
}


export default DashBoard