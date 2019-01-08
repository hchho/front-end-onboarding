import React, { Component } from 'react'
import DropDownMenu from './form-components/baseDropDownMenu'
import CheckBoxContainer from './form-components/baseCheckBoxContainer'
import CheckBox from './form-components/baseCheckBox'
import PropTypes from 'prop-types'

const ASCENDING_DATE = 'ascending'
const DESCENDING_DATE = 'descending'

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            accounts: [],
            activeAccounts: 'SHOW_ALL',
            activeCategories: new Map(),
            selectAllCategories: true,
            sortDirection: ASCENDING_DATE
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
        const item = e.target.name
        const isChecked = e.target.checked;
        this.setState(prevState => ({ selectAll: false, activeCategories: prevState.activeCategories.set(item, isChecked) }))
    }

    handleAccountChange = e => {
        this.setState({ activeAccounts: e.target.value })
    }

    handleSelectAllCategories = e => {
        this.setState(prevState => ({ selectAllCategories: !this.state.selectAllCategories }))
    }

    handleSortByDateChange = e => {
        this.setState({ sortDirection: e.target.value })
    }

    render() {
        if ((this.state.categories !== []) && this.state.accounts) {
            return (
                <form>
                    <div class="form-group">
                        <label>Accounts: </label>
                        <DropDownMenu items={this.state.accounts.map(account => ({ value: account.accountId, option: account.accountName }))} onChange={this.handleAccountChange} defaultOption='SHOW_ALL' />
                    </div>
                    <div class="form-group">
                        <label>Categories: </label>
                        <label>
                            Select All
                        <CheckBox name='SELECT_ALL_CATEGORIES' checked={this.state.selectAllCategories} onChange={this.handleSelectAllCategories} />
                        </label>
                        <CheckBoxContainer isDisabled={this.state.selectAllCategories ? 'disabled' : null} items={this.state.categories.map(category => ({ name: category }))} checkedItems={this.state.activeCategories} onChange={this.handleCategoryChange} />
                    </div>
                    <div class="form-group">
                    <label>Sort by date: </label>
                        <DropDownMenu items={[{ value: ASCENDING_DATE, option: 'newest to oldest'}, {value: DESCENDING_DATE, option: 'oldest to newest'}]} onChange={this.handleSortByDateChange} />
                    </div>
                    <input type="button" value="Submit" onClick={() => this.props.onClick(this.state)} />
                </form>
            )
        } else {
            return (
                <span>Loading filter form...</span>
            )
        }

    }
}

FilterForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default FilterForm

