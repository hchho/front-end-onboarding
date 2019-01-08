import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import DropDownMenu from '../components/form-components/baseDropDownMenu'

const mapStateToProps = state => {
    if(state.fetchAccounts) {
        return ({
            children: state.fetchAccounts
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