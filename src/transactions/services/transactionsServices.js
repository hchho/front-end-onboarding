import commonHttpServices from '../../utils/httpServices/httpServicesCommon'

const transactionServices = {
    getTransactions() {
        return commonHttpServices.get("http://demo1124891.mockable.io/transactions")
    }
}

export default transactionServices