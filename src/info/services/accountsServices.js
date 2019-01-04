import commonHttpServices from '../../utils/httpServices/httpServicesCommon'

const accountServices = {
    getAccounts() {
        return commonHttpServices.get("https://demo1124891.mockable.io/accounts")
    }
}

export default accountServices