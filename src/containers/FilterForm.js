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
        return dispatch(setVisibilityFilter(data.activeCategories))
    }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(FilterForm)