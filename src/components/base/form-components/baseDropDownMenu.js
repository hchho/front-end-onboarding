import React from 'react'
import PropTypes from 'prop-types'
import DropDownOption from './baseDropDownOption'

const DropDownMenu = ({ selected, items, onChange }) => {
    if (items) {
        return (
            <select
                onChange={onChange}
                value={selected}
            >
                {items.map((item, index) => (<DropDownOption key={index} value={item.value} option={item.option} />))}
            </select>
        )
    } else {
        return (<span>Loading categories...</span>)
    }
}

DropDownMenu.propTypes = {
    selected: PropTypes.string.isRequired,
    items: PropTypes.shape({
        value: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired,
    }),
    onChange: PropTypes.func.isRequired
}

export default DropDownMenu