import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilters'
import initialTransactions from './transactionsInitializers'
import categories from './fetchCategories'
import accounts from './fetchAccounts'

const rootReducer = combineReducers({
    accounts,
    categories,
    visibilityFilter,
    initialTransactions
})
export default rootReducer