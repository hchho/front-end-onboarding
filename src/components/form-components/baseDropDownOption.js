import React from 'react'

const DropDownOption = ({ index, value, option }) => (
            <option key={index} value={value}>{formatString(option)}</option>
)

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}

export default DropDownOption