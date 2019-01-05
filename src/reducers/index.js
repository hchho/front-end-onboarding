import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilters'
import initialTransactions from './transactionsInitializers'

const rootReducer = combineReducers({
    visibilityFilter,
    initialTransactions
})
export default rootReducer