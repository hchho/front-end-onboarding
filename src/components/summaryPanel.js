import React from 'react'
import PropTypes from 'prop-types'

const SummaryPanel = ({ ...details }) => {
    console.log(details)
    if (details) {
        return (
            <div>
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
            </div>
        )
    } else {
        return (<span>Loading summary...</span>)
    }
}

SummaryPanel.propTypes = {
    details: PropTypes.shape({
        earliestTransactionDate: PropTypes.string.isRequired,
        latestTransactionDate: PropTypes.string.isRequired,
        daysSpanByTransaction: PropTypes.number.isRequired,
        transactionCount: PropTypes.number.isRequired
    }).isRequired
}

export default SummaryPanel
