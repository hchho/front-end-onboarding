import React, { Component } from 'react'
import styled from 'styled-components'
import FilterForm from '../containers/FilterForm'
import CollapsibleWrapper from './styled/CollapsibleWrapper'
import SecondaryButton from './styled/SecondaryButton'

const StyledFilterPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

class FilterPanel extends Component {
    constructor() {
        super();
        this.state = {
            isExpanded: false
        }
    }
    togglePanel = e => {
        this.setState(prevState => ({ isExpanded: !prevState.isExpanded }))
    }

    render() {
        return (
            <StyledFilterPanel>
                <SecondaryButton onClick={this.togglePanel}>{this.state.isExpanded? 'Hide': 'Show'} filters</SecondaryButton>
                <CollapsibleWrapper className={this.state.isExpanded ? 'visible' : 'hidden'}>
                    <FilterForm />
                </CollapsibleWrapper>
            </StyledFilterPanel>
        )
    }
}

export default FilterPanel
