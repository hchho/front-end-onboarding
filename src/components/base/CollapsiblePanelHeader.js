import React from 'react'
import PropTypes from 'prop-types'
import StyledPanelHeader from '../styled/PanelHeader'
import CollapseButton from '../styled/CollapseButton'

const CollapsiblePanelHeader = ({ header, collapsible }) => (
    <StyledPanelHeader>
        {header}
        <CollapseButton className={collapsible.classNameToggle? 'active' : 'collapsible'} onClick={collapsible.onClick}>{collapsible.buttonText}</CollapseButton>
    </StyledPanelHeader>
)

CollapsiblePanelHeader.propTypes = {
    header: PropTypes.string.isRequired,
    collapsible: PropTypes.shape({
        classNameToggle: PropTypes.bool.isRequired,
        buttonText: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }).isRequired
}

export default CollapsiblePanelHeader