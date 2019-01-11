import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButtonDock = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;

    span {
        width: 200px;
        text-align: center;
    }
`;

const StyledNavButton = styled.button`
    border: none;
    text-decoration: underline;

    :hover {
        text-decoration: none;
        color: #82204A;
    }

    :focus {
        outline: 0;
    }

    :disabled {
        color: #666666;
        text-decoration: none;
    }
`;

const NavigationButtonDock = ({ prevPageFunc, nextPageFunc, prevButtonState, nextButtonState, startIndex, endIndex, totalLength }) => (
    <StyledButtonDock>
        <StyledNavButton onClick={prevPageFunc} disabled={prevButtonState}>&#8249; Back</StyledNavButton>
        <span>Showing {startIndex} - {endIndex} of {totalLength}</span>
        <StyledNavButton onClick={nextPageFunc} disabled={nextButtonState}>Next &#8250;</StyledNavButton>
    </StyledButtonDock>
)

NavigationButtonDock.propTypes = {
    prevPageFunc: PropTypes.func.isRequired,
    nextPageFunc: PropTypes.func.isRequired,
    prevButtonState: PropTypes.bool.isRequired,
    nextButtonState: PropTypes.bool.isRequired,
    startIndex: PropTypes.number.isRequired,
    endIndex: PropTypes.number.isRequired,
    totalLength: PropTypes.number.isRequired
}

export default NavigationButtonDock