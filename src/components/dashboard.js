import React, { Component } from 'react';
import VisibleTransactions from '../containers/VisibleTransactions'
import FilterPanel from './filterPanel'
import AccountsList from './accountsList'
import SummaryPanel from './summaryPanel'
import StyledDashBoard from './styled/DashBoard';

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledDashBoard>
                <SummaryPanel {...this.props} />
                <div>
                    Accounts: <AccountsList />
                </div>
                <FilterPanel />
                <p>
                    Transactions: <VisibleTransactions />
                </p>
            </StyledDashBoard>
        )
    }
}


export default DashBoard