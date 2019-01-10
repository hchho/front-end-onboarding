import React from 'react'
import CheckBox from './baseCheckBox'

const CheckBoxContainer = ({ className, isDisabled = null, items, checkedItems, onChange }) => (
    <div className={className}>
        {
            items.map((item, index) => (
                <div className="form-check" key={index}>
                    {formatString(item.name)}
                    <CheckBox name={item.name} checked={checkedItems.get(item.name)} onChange={onChange} disabled={isDisabled}/>
                </div>
            ))
        }
    </div>
)

const formatString = (originalString) => {
    return originalString.replace(/_/g, ' ');
}

export default CheckBoxContainer