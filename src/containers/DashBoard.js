import { connect } from 'react-redux'
import DashBoard from '../components/dashboard'

const mapStateToProps = state => {
    return ({
        accounts: state.accounts,
        info: state.initialTransactions.transactions
    })
}

export default connect(
    mapStateToProps
)(DashBoard)