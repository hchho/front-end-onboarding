import React from 'react'
import FilterLink from '../containers/FilterLink'
import CategoryFilters from '../containers/CategoryFilters'
import { VisibilityFilters } from '../actions'
// import CategoriesList from './categoriesList';

const ControlPanel = () => (
    <div>
        <div>
            <span>Categories: </span>
            <CategoryFilters />
        </div>
        <div>
            <span>Show: </span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_BANK_FEE}>Bank Fee</FilterLink>
        </div>
    </div>
)

export default ControlPanel
