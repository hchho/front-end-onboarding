import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
// import DashBoard from './components/dashboard'
import DashBoard from './containers/DashBoard'
import StyledApp from './components/styled/AppContainer'
import StyledHeader from './components/styled/Header'

const Footer = styled.div`
  padding: 5px;
`;

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
        <Footer className="footer">
          Created by Henry Ho
        </Footer>
      </StyledApp>
    );
  }
}

export default App;
