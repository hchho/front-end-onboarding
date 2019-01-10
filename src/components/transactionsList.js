import React from 'react'
import PropTypes from 'prop-types'
import Transaction from './transaction'
import styled from 'styled-components'
import StyledCard from './styled/StyledCard'

const StyledUL = styled.ul`
    list-style-type: none;
`;

const TransactionsList = ({ transactions }) => {
    if (transactions) {
        return (
            <div className="TransactionsList">
                <span>Number of transactions: { transactions.length }</span>
                <StyledCard>
                <StyledUL>
                    {transactions.map(function (transaction, index) {
                        return (
                            <li key={transaction.transactionId}>
                                <Transaction info={transaction} />
                            </li>
                        )
                    })}
                </StyledUL>
                </StyledCard>
            </div>
        )
    } else {
        return (<span>Loading...</span>)
    }
}

TransactionsList.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            info: PropTypes.shape({
                accountId: PropTypes.string.isRequired,
                transactionDate: PropTypes.string.isRequired,
                desc: PropTypes.string,
                amount: PropTypes.number.isRequired,
                withdrawal: PropTypes.number,
                deposit: PropTypes.number,
                runningBalance: PropTypes.number.isRequired,
                category: PropTypes.string,
                transactionId: PropTypes.string.isRequired
            })
        }).isRequired
    ).isRequired
}

export default TransactionsList