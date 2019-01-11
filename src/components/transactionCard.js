import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledCard from './styled/StyledCard'

const StyledTransactionCard = styled(StyledCard)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    span {
        font-size: 0.75em;
        color: #666;
    }
`;

const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    padding: 10;
`;

const DateContainer = styled(CardDetail)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


const TransactionCard = ({ info, accountName }) => {
    return (
        <StyledTransactionCard id={info.transactionId}>
            <DateContainer>
                {info.transactionDate}
                <span>
                    {info.transactionId}
                </span>
            </DateContainer>
            <CardDetail>
                Description: {info.description ? info.description : 'N/A'}
                <p>
                    {accountName}
                </p>
            </CardDetail>
            <CardDetail>
                {formatString(info.category)}
            </CardDetail>
            {renderTransactionType(info.withdrawal, info.deposit)}
            <CardDetail>
                {info.runningBalance}
            </CardDetail>
        </StyledTransactionCard>
    )
}

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}


const renderTransactionType = function (withdrawal, deposit) {
    if (withdrawal) {
        return (
            <CardDetail>
                -{withdrawal}
            </CardDetail>
        )
    }
    if (deposit) {
        return (
            <CardDetail>
                {deposit}
            </CardDetail>
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