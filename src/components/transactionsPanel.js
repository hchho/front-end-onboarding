import React from 'react'
import Panel from './styled/Panel'
import VisibleTransactions from '../containers/VisibleTransactions'
import FilterPanel from './filterPanel'
import PanelHeader from './base/PanelHeader'

const TransactionPanel = ({ }) => (
    <Panel>
        <PanelHeader header='Transactions' />
        <FilterPanel />
        <VisibleTransactions />

    </Panel>
)

export default TransactionPanel