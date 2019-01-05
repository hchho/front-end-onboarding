export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const initializeTransactions = transactions => ({
    type: 'INITIALIZE_TRANSACTIONS',
    payload: transactions
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_BANK_FEE: 'SHOW_BANK_FEE'
}