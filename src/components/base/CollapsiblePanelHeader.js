import React from 'react'
import PropTypes from 'prop-types'
import StyledPanelHeader from '../styled/PanelHeader'
import CollapsePanelButton from '../styled/CollapsePanelButton'

const CollapsiblePanelHeader = ({ header, collapsible }) => (
    <StyledPanelHeader>
        {header}
        <CollapsePanelButton className={collapsible.classNameToggle? 'active' : 'collapsible'} onClick={collapsible.onClick}>{collapsible.buttonText}</CollapsePanelButton>
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