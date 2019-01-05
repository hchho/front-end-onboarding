
const initialTransactions = (state = null, action) => {
    switch (action.type) {
        case 'INITIALIZE_TRANSACTIONS':
            return action.payload
        default: 
            return state
    }
}

export default initialTransactions