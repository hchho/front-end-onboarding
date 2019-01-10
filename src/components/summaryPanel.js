import React from 'react'
import PropTypes from 'prop-types'
import Panel from './styled/Panel'
import PanelHeader from './base/PanelHeader'
import PanelContentWrapper from './styled/PanelContentWrapper'

const SummaryPanel = ({ header, ...details }) => {
    if (details) {
        return (
            <Panel>
                <PanelHeader header={header} />
                <PanelContentWrapper>
                    <p>
                        Earliest transaction date: {details.earliestTransactionDate}
                    </p>
                    <p>
                        Latest transaction date: {details.latestTransactionDate}
                    </p>
                    <p>
                        Days span by transaction: {details.daysSpanByTransaction}
                    </p>
                    <p>
                        Total transactions: {details.transactionCount}
                    </p>
                </PanelContentWrapper>
            </Panel>
        )
    } else {
        return (<span>Loading summary...</span>)
    }
}

SummaryPanel.propTypes = {
    header: PropTypes.string.isRequired,
    details: PropTypes.shape({
        earliestTransactionDate: PropTypes.string.isRequired,
        latestTransactionDate: PropTypes.string.isRequired,
        daysSpanByTransaction: PropTypes.number.isRequired,
        transactionCount: PropTypes.number.isRequired
    })
}

export default SummaryPanel
