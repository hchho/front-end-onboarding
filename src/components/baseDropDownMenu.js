import React from 'react'
import PropTypes from 'prop-types'
import DropDownOption from './baseDropDownOption'

const DropDownMenu = ({ children, onChange }) => {
    if (children) {
        return (
            <select
                onChange={onChange}
            >
            <DropDownOption index='-1' option='SHOW_ALL' />
            {children.map((child, index) => (<DropDownOption index={index} option={child} />))}
            </select>
        )
    } else {
        return (<span>Loading categories...</span>)
    }
}

DropDownMenu.propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired
}

export default DropDownMenu