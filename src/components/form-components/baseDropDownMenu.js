import React from 'react'
import PropTypes from 'prop-types'
import DropDownOption from './baseDropDownOption'

const DropDownMenu = ({ items, onChange, defaultOption = null }) => {
    if (items) {
        return (
            <select
                onChange={onChange}
            >
                {defaultOption ? <DropDownOption index='-1' option={defaultOption} /> : null}
                {items.map((item, index) => (<DropDownOption index={index} value={item.value} option={item.option} />))}
            </select>
        )
    } else {
        return (<span>Loading categories...</span>)
    }
}

DropDownMenu.propTypes = {
    items: PropTypes.shape({
        value: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired,
    }),
    onChange: PropTypes.func.isRequired
}

export default DropDownMenu