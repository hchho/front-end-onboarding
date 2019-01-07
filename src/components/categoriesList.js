import React from 'react'

const CategoriesList = ({ categories }) => {
    if (categories) {
        return (
            <ul>
                {categories.map((category, index) => {
                    return (<li key={index}>{category}</li>)
                })}
            </ul>
        )
    } else {
        return (<span>Loading categories...</span>)
    }
}

export default CategoriesList