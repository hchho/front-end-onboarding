import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterForm from '../components/filterForm'

const mapStateToProps = state => {
    return ({
        activeCategories: state.visibilityFilter
    })
}

const mapDispatchProps = (dispatch, ownProps) => {
    return ({onClick: (data) => {
        return dispatch(setVisibilityFilter(data.activeAccounts))
    }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(FilterForm)