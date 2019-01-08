export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const initializeTransactions = transactions => ({
    type: 'INITIALIZE_TRANSACTIONS',
    payload: transactions
})

export const categories = categories => ({
    type: 'FETCH_CATEGORIES',
    payload: categories
})

export const accounts = accounts => ({
    type: 'FETCH_ACCOUNTS',
    payload: accounts
})