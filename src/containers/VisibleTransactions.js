import { connect } from 'react-redux'
import TransactionsList from '../components/transactionsList'

const ASCENDING_DATE = 'ascending'
const DESCENDING_DATE = 'descending'

const getVisibleTransactions = (transactions, filter) => {
    let processedTransactions = sortTransactions(filter.sortDirection, transactions)
    switch (filter) {
        case 'SHOW_ALL':
            return processedTransactions
        case filter:
            return processedTransactions.filter(t => {
                return filterAccounts(filter.activeAccounts, t.accountId) && (filter.selectAllCategories || filter.activeCategories.has(t.category)) && filterDates(filter, t)})
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const sortTransactions = (sortByValue, transactions) => {
    if (sortByValue === ASCENDING_DATE) {
        return transactions.sort((a, b) => {
            return new Date(b.transactionDate).getTime() - new Date(a.transactionDate).getTime()
        })
    } else if (sortByValue === DESCENDING_DATE) {
        return transactions.sort((a, b) => {
            return new Date(a.transactionDate).getTime() - new Date(b.transactionDate).getTime()
        })
    } else {
        return transactions
    }
}

const filterDates = (filter, transaction) => {
    let transactionDate = new Date(transaction.transactionDate).getTime()
    let startDate = new Date(filter.filterEarliestDate).getTime()
    let endDate = new Date(filter.filterLatestDate).getTime()
    return transactionDate >= startDate && transactionDate <= endDate
}

const filterAccounts = (filter, accId) => {
    switch (filter) {
        case 'SHOW_ALL':
            return true
        case filter:
            return accId === filter
        default:
            throw new Error('Unknown account filter')
    }
}

const mapStateToProps = (state, ownProps) => {
    if (state.initialTransactions && state.accounts && state.visibilityFilter) {
        let visibleTransactions = getVisibleTransactions(state.initialTransactions.transactions, state.visibilityFilter)
        return ({
            transactions: visibleTransactions,
            accounts: state.accounts
        })
    } else {
        return ({
            transactions: state.initialTransactions.transactions,
            accounts: state.accounts
        })
    }
}

export default connect(
    mapStateToProps
)(TransactionsList)