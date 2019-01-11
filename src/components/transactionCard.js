import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledCard from './styled/StyledCard'
import CardWrapper from './styled/CardWrapper'
import CardDetailWrapper from './styled/CardDetailWrapper'

const TransactionWrapper = styled(CardWrapper)`
    span {
        font-size: 0.75em;
        color: #666;
    }
`;

const TransactionDetailWrapper = styled(CardDetailWrapper)`
    flex-basis: 0;
    padding: 10;
`;

const DateContainer = styled(TransactionDetailWrapper)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


const TransactionCard = ({ info, accountName }) => {
    return (
        <StyledCard id={info.transactionId}>
            <TransactionWrapper>
                <DateContainer>
                    {info.transactionDate}
                    <span>
                        {info.transactionId}
                    </span>
                </DateContainer>
                <TransactionDetailWrapper>
                    Description: {info.description ? info.description : 'N/A'}
                    <p>
                        {accountName}
                    </p>
                </TransactionDetailWrapper>
                <TransactionDetailWrapper>
                    {formatString(info.category)}
                </TransactionDetailWrapper>
                {renderTransactionType(info.withdrawal, info.deposit)}
                <TransactionDetailWrapper>
                    {info.runningBalance}
                </TransactionDetailWrapper>
            </TransactionWrapper>
        </StyledCard>
    )
}

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}


const renderTransactionType = function (withdrawal, deposit) {
    if (withdrawal) {
        return (
            <TransactionDetailWrapper>
                -{withdrawal}
            </TransactionDetailWrapper>
        )
    }
    if (deposit) {
        return (
            <TransactionDetailWrapper>
                {deposit}
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