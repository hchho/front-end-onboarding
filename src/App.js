import React, { Component } from 'react';
import './App.css';
import TransactionsList from './transactions/components/transactionsList'

class App extends Component {
  render() {
    return (
      <div class="container">
        <TransactionsList />
      </div>
    );
  }
}

export default App;
