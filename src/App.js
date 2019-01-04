import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import DashBoard from './components/dashboard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      info: null
    }
  }

  componentDidMount() {
    fetch('http://demo1124891.mockable.io/transactions', { mode: 'cors' })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ isLoading: false, info: data })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div className="container">
        <DashBoard props={this.state.info }/>
      </div>
    );
  }
}

export default App;
