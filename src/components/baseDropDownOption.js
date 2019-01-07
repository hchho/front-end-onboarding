import React from 'react'

const DropDownOption = ({ index, option }) => (
            <option key={index} value={option}>{formatString(option)}</option>
)

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}
    
export default DropDownOption