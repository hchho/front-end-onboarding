import { connect } from 'react-redux'
import TransactionsList from '../components/transactionsList'

const getVisibleTransactions = (transactions, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return transactions
        case filter:
            return transactions.filter(t => {
                return t.category === filter || filterAccounts(filter, t.accountId)
            })
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const filterAccounts = (filter, accId) => {
    switch(filter) {
        case 'SHOW_ALL':
            return true
        case filter:
            return accId === filter
        default: 
            throw new Error('Unknown account filter')
    }
}

const mapStateToProps = state => {
    if(state.initialTransactions) {
        return ({
            transactions: getVisibleTransactions(state.initialTransactions, state.visibilityFilter)
        })
    }
    else {
        return ({
            transactions: state.initialTransactions
        })
    }
}

export default connect(
    mapStateToProps
)(TransactionsList)