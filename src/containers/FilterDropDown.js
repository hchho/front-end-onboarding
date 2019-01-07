import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import DropDownMenu from '../components/baseDropDownMenu'

const mapStateToProps = state => {
    if(state.fetchCategories) {
        return ({
            children: state.fetchCategories
        })
    }
    else {
        return state
    }
}

const mapDispatchProps = (dispatch, ownProps) => {
    return ({onChange: (data) =>  dispatch(setVisibilityFilter(data.target.value))})
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(DropDownMenu)