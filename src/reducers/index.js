import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilters'
import initialTransactions from './transactionsInitializers'
import fetchCategories from './fetchCategories'

const rootReducer = combineReducers({
    fetchCategories,
    visibilityFilter,
    initialTransactions
})
export default rootReducer