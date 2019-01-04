import React, { Component } from 'react'

class AccountsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: null
        }
    }

    componentDidMount() {
        fetch('https://demo1124891.mockable.io/accounts', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ accounts: data.accounts}))
    }

    render() {
        if (this.state.accounts) {
            return (
                <div className="Accounts-List">
                    <ul>
                        {this.state.accounts.map(acc => {
                            return (
                                <li>
                                    <p>
                                        Account ID: {acc.accountId}
                                    </p>
                                    <p>
                                        Account name: {acc.accountName}
                                    </p>
                                    <p>
                                        Account no.: {acc.accountNumber}
                                    </p>
                                    <p>
                                        Balance: {acc.balance}
                                    </p>
                                    <p>
                                        Balance Updated: {acc.balanceUpdated}
                                    </p>
                                    <p>
                                        Institution: {acc.institutionName}
                                    </p>
                                    <p>
                                        Transit no.: {acc.transitNumber}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        return (<span>Loading...</span>)
    }
}

export default AccountsList