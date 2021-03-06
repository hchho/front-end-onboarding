import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const appStore = createStore(rootReducer)

fetch('http://demo1124891.mockable.io/transactions', { mode: 'cors' })
    .then(res => res.json())
    .then(data => {
        appStore.dispatch({ type: 'INITIALIZE_TRANSACTIONS', payload: data })
    })

fetch('http://demo1124891.mockable.io/accounts', { mode: 'cors' })
    .then(res => res.json())
    .then(data => {
        appStore.dispatch({ type: 'FETCH_ACCOUNTS', payload: data.accounts })
    })


fetch('http://demo1124891.mockable.io/categories', { mode: 'cors' })
    .then(res => res.json())
    .then(data => {
        appStore.dispatch({ type: 'FETCH_CATEGORIES', payload: data.categories })
    })


ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA




serviceWorker.unregister();
