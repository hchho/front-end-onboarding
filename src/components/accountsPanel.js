import React, { Component } from 'react'
import Panel from './styled/Panel'
import CollapsibleWrapper from './styled/CollapsibleWrapper'

import PanelHeader from './base/PanelHeader'
class AccountsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: null,
            accountsVisibility: 'hidden'
        }
    }

    componentDidMount() {
        fetch('https://demo1124891.mockable.io/accounts', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ accounts: data.accounts }))
    }

    expandWrapper = e => {
        if (this.state.accountsVisibility === 'hidden') {
            this.setState({ accountsVisibility: 'visible' })
        } else {
            this.setState({ accountsVisibility: 'hidden' })
        }
    }

    render() {
        if (this.state.accounts) {
            return (
                <Panel className="Accounts-List">
                    <PanelHeader header={this.props.header} />
                    <CollapsibleWrapper className={this.state.accountsVisibility}>
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
                    </CollapsibleWrapper>

                    <input type="button" onClick={this.expandWrapper} value="...See more" />
                </Panel>
            )
        }
        return (<span>Loading...</span>)
    }
}

export default AccountsList