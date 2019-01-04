import { connect } from 'react-redux'
import TransactionsList from '../components/transactionsList'
import { VisibilityFilters } from '../actions'

const getVisibleTransactions = (transactions, filter) => {
    console.log(transactions);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return transactions
        case VisibilityFilters.SHOW_BANK_FEE:
            return transactions.filter(t => {
                return t.category === 'BANK_FEE'
            })
        default: 
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    transactions: getVisibleTransactions(state.transactions, state.visibilityFilters)
})

export default connect(
    mapStateToProps
)(TransactionsList)