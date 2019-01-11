import React from 'react'

const DropDownOption = ({ value, option }) => (
            <option value={value}>{formatString(option)}</option>
)

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}

export default DropDownOption