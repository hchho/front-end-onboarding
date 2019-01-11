import React from 'react';
import PropTypes from 'prop-types'
import StyledCard from './styled/StyledCard'

const TransactionCard = ({ info }) => {
    return (
    <StyledCard id={info.transactionId}>
        <p>
            Account ID: { info.accountId }
        </p>
        <p>
            Transaction date: { info.transactionDate }
        </p>
        <p>
            Description: { info.description? info.description: 'N/A' }
        </p>
        <p>
            Amount: { info.amount }
        </p>
        {renderTransactionType(info.withdrawal, info.deposit)}
        <p>
            Running balance: { info.runningBalance }
        </p>
        <p>
            Category: { info.category }
        </p>
        <p>
            Transaction ID: { info.transactionId }
        </p>
    </StyledCard>
)}

const renderTransactionType = function(withdrawal, deposit) {
    if (withdrawal) {
        return (
            <p>
                Withdrawal: {withdrawal}
            </p>
        )
    }
    if (deposit) {
        return (
            <p>
                Deposit: {deposit}
            </p>
        )
    }
    return (<p>Neither deposited nor withdrew</p>)
}

TransactionCard.propTypes = {
    info: PropTypes.shape({
        accountId: PropTypes.string.isRequired,
        transactionDate: PropTypes.string.isRequired,
        description: PropTypes.string,
        amount: PropTypes.number.isRequired,
        withdrawal: PropTypes.number,
        deposit: PropTypes.number,
        runningBalance: PropTypes.number.isRequired,
        category: PropTypes.string,
        transactionId: PropTypes.string.isRequired
    })
}

export default TransactionCard