import React, { Component } from 'react'
import Panel from './styled/Panel'
import CollapsibleWrapper from './styled/CollapsibleWrapper'
import CollapseButton from './styled/CollapseButton'
import PanelHeader from './base/PanelHeader'
class AccountsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: null,
            accountsVisible: false
        }
    }

    componentDidMount() {
        fetch('https://demo1124891.mockable.io/accounts', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ accounts: data.accounts }))
    }

    expandWrapper = e => {
        this.setState(prevState => ({ accountsVisible: !prevState.accountsVisible}))
    }

    render() {
        if (this.state.accounts) {
            return (
                <Panel className="Accounts-List">
                    <PanelHeader header={this.props.header} />
                    <CollapsibleWrapper className={this.state.accountsVisible? 'visible': 'hidden'}>
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
                    <CollapseButton className={this.state.accountsVisible? 'active':'collapsible'} onClick={this.expandWrapper}></CollapseButton>
                </Panel>
            )
        }
        return (<span>Loading...</span>)
    }
}

export default AccountsList