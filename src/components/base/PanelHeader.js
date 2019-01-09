import React from 'react'
import PropTypes from 'prop-types'
import StyledPanelHeader from '../styled/PanelHeader'

const Header = ({ header }) => (
    <StyledPanelHeader>{header}</StyledPanelHeader>
)

Header.propTypes = {
    header: PropTypes.string.isRequired
}

export default Header