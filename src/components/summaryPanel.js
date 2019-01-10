import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Panel from './styled/Panel'
import PanelContentWrapper from './styled/PanelContentWrapper'

const StyledSummaryPanel = styled(Panel)`
    
background-image: linear-gradient(#AE3F6F, #82204A);
color: white;

div.header {
    font-size: 1.25em;
    font-weight: bold;
    padding: 10px;
    text-align: center;
}
`

const SummaryContentWrapper = styled(PanelContentWrapper)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly
    background: white;
    border-radius: 5px;
    color: #231123;
    background-image: linear-gradient(#FFF, #EEE)
`;

const SummaryDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2px;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
    min-height: 50px;
    width: auto;
`;

const SummaryPanel = ({ header, ...details }) => {
    if (details) {
        return (
            <StyledSummaryPanel>
                <div className="header">
                    {header}
                </div>
                <SummaryContentWrapper>
                    <SummaryDetail>
                        <p>Earliest transaction date:</p><h3>{details.earliestTransactionDate}</h3>
                    </SummaryDetail>
                    <SummaryDetail>
                        <p>Latest transaction date:</p><h3>{details.latestTransactionDate}</h3>
                    </SummaryDetail>
                    <SummaryDetail>
                        <p>Days span by transaction:</p><h3>{details.daysSpanByTransaction}</h3>
                    </SummaryDetail>
                    <SummaryDetail>
                        <p>Total transactions:</p><h3>{details.transactionCount}</h3>
                    </SummaryDetail>
                    <SummaryDetail>
                        <p>Total balance:</p><h3>${details.totalBalance}</h3>
                    </SummaryDetail>
                </SummaryContentWrapper>
            </StyledSummaryPanel>
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
        transactionCount: PropTypes.number.isRequired,
        totalBalance: PropTypes.number.isRequired
    })
}

export default SummaryPanel
