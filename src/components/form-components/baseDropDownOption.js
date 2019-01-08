import React from 'react'

const DropDownOption = ({ index, value, option }) => (
            <option key={index} value={value}>{formatOption(option)}</option>
)

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}

const formatOption = (option) => {
    if (typeof option === 'string') {
        return formatString(option)
    } else {
        return option.accountName // This should not be hard-coded. Temporary hack to get the form working
    }
}

const formatValue = (option) => {
    if (typeof option === 'string') {
        return formatString(option)
    } else {
        return option.accountName // This should not be hard-coded. Temporary hack to get the form working
    }
}
    
export default DropDownOption