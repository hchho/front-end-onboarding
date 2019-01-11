import React from 'react'
import PropTypes from 'prop-types'
import StyledCard from './styled/StyledCard'
import styled from 'styled-components'

const StyledAccountCard = styled(StyledCard)`
    span.minor {
        color: #666;
        font-size: 0.75em;
    }
`;

const CircleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    background: #558C8C;
    background-image: linear-gradient(#E8DB7D, #558C8C);
    color: white;
    width: 120px;
    height: 120px;
     
    span.minor-content {
        font-size: 0.75em;
    }

    span.highlight {
        font-weight: bold;
        font-size: 1.5em;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &.important-details {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.details > p {
        display: flex;
        flex-direction: row;
    }

    &.details > p > span {
        width: 100px;
    }
`;

const AccountCard = ({ ...acc }) => (
    <StyledAccountCard>
        <h3>{acc.accountName}</h3>
        <span className="minor">ID: {acc.accountId}</span>
        <CardWrapper>
            <CardDetail className="details">
                <p>
                    <span>Institution:</span><b>{acc.institutionName}</b>
                </p>
                <p>
                    <span>Account no.:</span><b>{acc.accountNumber}</b>
                </p>
                <p>
                    <span>Transit no.:</span> <b>{acc.transitNumber}</b>
                </p>
            </CardDetail>
            <CardDetail className="important-details">
                <CircleDiv className="highlight">
                    <span className="minor-content">Balance:</span><span className="highlight">${acc.balance.toFixed(2)}</span>
                </CircleDiv>
                <p>
                    <span className="minor">Last updated: {acc.balanceUpdated}</span>
                </p>
            </CardDetail>
        </CardWrapper>
    </StyledAccountCard>
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
    })
}

export default AccountCard