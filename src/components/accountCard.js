import React from 'react'
import PropTypes from 'prop-types'
import StyledCard from './styled/StyledCard'

const AccountCard = ({ ...acc }) => (
    <StyledCard>
        <p>
            Account ID: {acc.accountId}
        </p>
        <p>
            Account name: {acc.accountName}
        </p>
        <p>
            Account no.: {acc.accountNumber}
        </p>
        <p>
            Balance: {acc.balance}
        </p>
        <p>
            Balance Updated: {acc.balanceUpdated}
        </p>
        <p>
            Institution: {acc.institutionName}
        </p>
        <p>
            Transit no.: {acc.transitNumber}
        </p>
    </StyledCard>
)

AccountCard.propTypes = {
    acc: PropTypes.shape({
        accountId: PropTypes.string.isRequired,
        accountName: PropTypes.string.isRequired,
        accountNumber: PropTypes.number.isRequired,
        balance: PropTypes.number.isRequired,
        balanceUpdated: PropTypes.string.isRequired,
        institutionName: PropTypes.string.isRequired,
        transitNumber: PropTypes.number.isRequired
    }).isRequired
}

export default AccountCard