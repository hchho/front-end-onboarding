import React from 'react'
import CheckBox from './baseCheckBox'

const CheckBoxContainer = ({ isDisabled = null, items, checkedItems, onChange }) => (
    <div className="checkbox-container">
        {
            items.map((item, index) => (
                <label key={index}>
                    {formatString(item.name)}
                    <CheckBox name={item.name} checked={checkedItems.get(item.name)} onChange={onChange} disabled={isDisabled}/>
                </label>
            ))
        }
    </div>
)

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}

export default CheckBoxContainer