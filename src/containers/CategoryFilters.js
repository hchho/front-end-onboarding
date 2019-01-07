import { connect } from 'react-redux'
import CategoriesList from '../components/categoriesList'

const mapStateToProps = state => {
    if(state.fetchCategories) {
        return ({
            categories: state.fetchCategories
        })
    }
    else {
        return ({
            categories: state.fetchCategories
        })
    }
}

export default connect(
    mapStateToProps
)(CategoriesList)