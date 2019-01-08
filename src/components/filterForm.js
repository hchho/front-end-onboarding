import React, { Component } from 'react'
import DropDownMenu from './form-components/baseDropDownMenu'
import PropTypes from 'prop-types'

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            accounts: [],
            activeAccounts: 'SHOW_ALL',
            activeCategories: 'SHOW_ALL'
        }
    }

    componentDidMount() {
        fetch('http://demo1124891.mockable.io/categories', { mode: 'cors' })
        .then(res => res.json())
        .then(data => this.setState({ categories: data.categories }))

        fetch('http://demo1124891.mockable.io/accounts', { mode: 'cors' })
        .then(res => res.json())
        .then(data => this.setState({ accounts: data.accounts }))
    }
    

    handleCategoryChange = e => {
        this.setState({ activeCategories: e.target.value })
    }

    handleAccountChange = e => {
        this.setState({ activeAccounts: e.target.value })
    }

    render() {
        return (
            <form>
                <div class="form-group">
                    <label>Categories: </label>
                    <DropDownMenu items={this.state.categories.map(category => ({key: category, option: category}))} onChange={this.handleCategoryChange} />
                </div>
                <div class="form-group">
                    <label>Accounts: </label>
                    <DropDownMenu items={this.state.accounts.map(account => ({ key: account.accountId, option: account.accountName}))} onChange={this.handleAccountChange} />
                </div>
                <input type="button" value="Submit" onClick={() => this.props.onClick(this.state)}/>
            </form>
        )
    }
}

FilterForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default FilterForm

