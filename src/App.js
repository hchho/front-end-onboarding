import React, { Component } from 'react';
import './App.css';
import DashBoard from './components/dashboard'
import StyledApp from './components/styled/AppContainer'
import StyledHeader from './components/styled/Header'

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
        this.setState({ isLoading: false, info: data })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <StyledApp>
        <StyledHeader>
          <h1>GumQuat</h1>
        </StyledHeader>
        <DashBoard {...this.state.info} />
      </StyledApp>
    );
  }
}

export default App;
