import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterForm from '../components/filterForm'

const mapStateToProps = state => {
    return ({
        activeCategories: state.visibilityFilter,
        accounts: state.accounts
    })
}

const mapDispatchProps = (dispatch) => {
    return ({onClick: (data) => dispatch(setVisibilityFilter(data))})
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(FilterForm)