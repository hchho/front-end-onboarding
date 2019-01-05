<img src="https://avatars1.githubusercontent.com/u/25853537?s=400&u=87eb6400064d11349ee0c8604dd45df9f76da9ee&v=4" alt="Grow Logo" width="300">

# Front-end Onboarding

## Tech requirements

Complete the requirements below using a **React-Redux** solution in **ES6**. Style your components with **styled-components**.

## Functional requirements

Build a user interface to view a list of financial transactions for a user. Your approach should be user focused with a simple to use interface that displays all the needed information concisely.

The user should be able to do the following:

- ~~See their transactions for multiple accounts under a single list.~~
- Filter their transactions by account.
- Filter their transactions by multiple categories.
- ~~Sort their transactions from most recent to oldest and vice versa.~~
- ~~See their total balance across all accounts.~~
- Reset all applied filters.
- Filter transactions by a "from" and "to" date (ex. January 1st 2017 to January 18th 2017)
- ~~Format text returned from the APIs to be readable~~

## Non-functional requirements

- Your code should be a hosted on Github with periodic commits instead of one large commit. Make sure your commit messages are clear and understandable.
- The UI should be responsive and easy to use.

## API

### Transactions

Returns a list of aggregate transactions that belong to _multiple_ accounts.

`GET http://demo1124891.mockable.io/transactions`

### Accounts

Returns a list of accounts that those transactions in the above endpoint are from.

`GET https://demo1124891.mockable.io/accounts`

### Categories

Returns a list of all possible categories a transaction can have.

`GET http://demo1124891.mockable.io/categories`

Use this data to construct your UI. We recommend spending a few minutes analyzing the returned data before writing code.

## Remarks

- Use this onboarding challenge to display your creativity and development skills.
- Component based code with a functional approach is preferred.
- Don't hesitate to ask any questions regarding the onboarding challenge.

## Useful Links

- [Beginner's Guide to React with ES6](https://medium.com/the-andela-way/a-beginners-guide-to-react-with-es6-a2ed0b5c977e) useful guide to help you get started
- [Create React App](https://github.com/facebookincubator/create-react-app]) starter kit
- [Redux Tutorial](https://redux.js.org/basics/basic-tutorial) for an idea of what redux is and how to implement it with React
- [styled-components](https://www.styled-components.com/) for styling your React components, in style
- [Dribbble transactions UI examples](https://dribbble.com/tags/transactions) for inspiration
