import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

fetch('http://demo1124891.mockable.io/transactions', { mode: 'cors' })
    .then(res => res.json())
    .then(data => {
        store.dispatch({ type: 'INITIALIZE_TRANSACTIONS', payload: data.transactions })
    })

serviceWorker.unregister();
