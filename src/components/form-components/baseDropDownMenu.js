import React from 'react'
import PropTypes from 'prop-types'
import DropDownOption from './baseDropDownOption'

const DropDownMenu = ({ items, onChange }) => {
    if (items) {
        return (
            <select
                onChange={onChange}
            >
                <DropDownOption index='-1' option='SHOW_ALL' />
                {items.map((item, index) => (<DropDownOption index={index} value={item.key} option={item.option} />))}
            </select>
        )
    } else {
        return (<span>Loading categories...</span>)
    }
}

DropDownMenu.propTypes = {
    items: PropTypes.shape({
        key: PropTypes.string.isRequired,
        option: PropTypes.string.isRequired,
    }),
    onChange: PropTypes.func.isRequired
}

export default DropDownMenu