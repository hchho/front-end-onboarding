import React, { Component } from 'react'
import DropDownMenu from './base/form-components/baseDropDownMenu'
import CheckBoxContainer from './base/form-components/baseCheckBoxContainer'
import CheckBox from './base/form-components/baseCheckBox'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Form from './styled/Form'
import PrimaryButton from './styled/PrimaryButton'
import PrimaryOpposingButton from './styled/PrimaryOpposingButton'

const ButtonDock = styled.div`
    display: flex;
    flex-direction: row
`;

const ASCENDING_DATE = 'ascending'
const DESCENDING_DATE = 'descending'
const SORT_BY_DATE_OPTIONS = [
    {
        value: ASCENDING_DATE,
        option: 'NEWEST to OLDEST'
    },
    {
        value: DESCENDING_DATE,
        option: 'OLDEST to NEWEST'
    }]

const DEFAULT_FILTERS = {
    activeAccounts: 'SHOW_ALL',
    selectAllCategories: true,
    sortDirection: ASCENDING_DATE
}

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            accounts: [],
            activeCategories: new Map(),
            ...DEFAULT_FILTERS
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

    resetFilterForm = e => {
        this.setState({ ...DEFAULT_FILTERS, activeCategories: new Map() })
    }

    render() {
        if ((this.state.categories !== []) && this.state.accounts) {
            return (
                <Form>
                    <div className="form-group">
                        <label>Accounts: </label>
                        <DropDownMenu selected={this.state.activeAccounts} items={[{ value: 'SHOW_ALL', option: 'SHOW_ALL' }, ...this.state.accounts.map(account => ({ value: account.accountId, option: account.accountName }))]} onChange={this.handleAccountChange} />
                    </div>
                    <div className="form-group">
                        <label>Categories: </label>
                        <div className="check-container">
                            <div className={this.state.selectAllCategories ? 'form-check' : 'inactive'}>
                                SELECT ALL
                            <CheckBox name='SELECT_ALL_CATEGORIES' checked={this.state.selectAllCategories} onChange={this.handleSelectAllCategories} />
                            </div>
                            <CheckBoxContainer className={this.state.selectAllCategories ? 'inactive' : ''} isDisabled={this.state.selectAllCategories ? 'disabled' : null} items={this.state.categories.map(category => ({ name: category }))} checkedItems={this.state.activeCategories} onChange={this.handleCategoryChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Sort by date: </label>
                        <DropDownMenu selected={this.state.sortDirection} items={SORT_BY_DATE_OPTIONS} onChange={this.handleSortByDateChange} />
                    </div>
                    <ButtonDock>
                        <PrimaryOpposingButton type="button" onClick={this.resetFilterForm}>Reset</PrimaryOpposingButton>
                        <PrimaryButton type="button" onClick={() => this.props.onClick(this.state)}>Submit</PrimaryButton>
                    </ButtonDock>
                </Form>
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

