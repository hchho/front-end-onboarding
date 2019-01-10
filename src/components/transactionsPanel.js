import React from 'react'
import Panel from './styled/Panel'
import VisibleTransactions from '../containers/VisibleTransactions'
import FilterPanel from './filterPanel'
import PanelHeader from './base/PanelHeader'
import PanelContentWrapper from './styled/PanelContentWrapper'

const TransactionPanel = ({ header }) => (
    <Panel>
        <PanelHeader header={header} />
        <PanelContentWrapper>
            <FilterPanel />
            <VisibleTransactions />
        </PanelContentWrapper>
    </Panel>
)

export default TransactionPanel