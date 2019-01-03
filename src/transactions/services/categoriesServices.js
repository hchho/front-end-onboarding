import commonHttpServices from '../../utils/httpServices/httpServicesCommon'

const categoriesServices = {
    getCategories() {
        return commonHttpServices.get("http://demo1124891.mockable.io/categories")
    }
}

export default transactionServices