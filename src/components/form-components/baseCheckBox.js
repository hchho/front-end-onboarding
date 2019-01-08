import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({ name, checked = false, onChange, disabled = null }) => (
    <input type='checkbox' name={name} checked={checked} onChange={onChange} disabled={disabled} />
)

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}

export default CheckBox