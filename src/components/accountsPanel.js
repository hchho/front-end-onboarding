import React, { Component } from 'react'
import Panel from './styled/Panel'
import CollapsibleWrapper from './styled/CollapsibleWrapper'
import CollapsiblePanelHeader from './base/CollapsiblePanelHeader'
import SecondaryButton from './styled/SecondaryButton'
import StyledUL from './styled/StyledUnorderedList'
import AccountCard from './accountCard'

class AccountsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountsVisible: false
        }
    }

    toggleWrapper = e => {
        this.setState(prevState => ({ accountsVisible: !prevState.accountsVisible}))
    }

    render() {
        if (this.props.accounts) {
            return (
                <Panel className="Accounts-List">
                    <CollapsiblePanelHeader header={this.props.header} collapsible={{ classNameToggle: this.state.accountsVisible, onClick: this.toggleWrapper, buttonText: this.state.accountsVisible? '-':'+' } } />
                    <CollapsibleWrapper className={this.state.accountsVisible? 'visible': 'preview'} >
                        <StyledUL>
                            {this.props.accounts.map(acc => {
                                return (
                                    <li key={acc.accountId}>
                                        <AccountCard {...acc} />
                                    </li>
                                )
                            })}
                        </StyledUL>
                    </CollapsibleWrapper>
                    <SecondaryButton onClick={this.toggleWrapper}>{this.state.accountsVisible? 'See less' : 'See more'}</SecondaryButton>
                </Panel>
            )
        }
        return (<span>Loading...</span>)
    }
}

export default AccountsList