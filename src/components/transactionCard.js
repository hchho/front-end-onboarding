import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledCard from './styled/StyledCard'
import CardWrapper from './styled/CardWrapper'
import CardDetailWrapper from './styled/CardDetailWrapper'

const TransactionWrapper = styled(CardWrapper)`
    p.minor {
        font-size: 0.75em;
        color: #666;
    }
`;

const TransactionDetailWrapper = styled(CardDetailWrapper)`
    flex-basis: 0;
    padding: 10;
    justify-content: center;
    align-items: center;

    &.description {
        display: flex;
        justify-content: flex-start;
    }

    .balance {
        font-decoration: italics
    }
`;


const TransactionCard = ({ info, accountName }) => {
    return (
        <StyledCard id={info.transactionId}>
            <TransactionWrapper>
                <TransactionDetailWrapper>
                    {info.transactionDate}
                    <p className="minor">
                        ID: {info.transactionId}
                    </p>
                </TransactionDetailWrapper>
                <TransactionDetailWrapper className="description">
                    <p>
                        {info.description}
                    </p>
                    <p>
                        {accountName}
                    </p>
                </TransactionDetailWrapper>
                <TransactionDetailWrapper>
                    {formatString(info.category)}
                </TransactionDetailWrapper>
                {renderTransactionType(info.withdrawal, info.deposit)}
                <TransactionDetailWrapper className="balance">
                    ${info.runningBalance.toFixed(2)}
                </TransactionDetailWrapper>
            </TransactionWrapper>
        </StyledCard>
    )
}

const formatString = (originalString) => {
    if(originalString) {
        return originalString.replace(/_/g, ' ');
    } 
    return 'N/A'
}


const renderTransactionType = function (withdrawal, deposit) {
    if (withdrawal) {
        return (
            <TransactionDetailWrapper style={{ color: 'red'}}>
                -${withdrawal.toFixed(2)}
            </TransactionDetailWrapper>
        )
    }
    if (deposit) {
        return (
            <TransactionDetailWrapper style={{color: 'green'}}>
                ${deposit.toFixed(2)}
            </TransactionDetailWrapper>
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
    }).isRequired,
    accountName: PropTypes.string.isRequired
}

export default TransactionCard