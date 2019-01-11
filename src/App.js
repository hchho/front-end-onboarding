import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import DashBoard from './containers/DashBoard'
import StyledApp from './components/styled/AppContainer'
import StyledHeader from './components/styled/Header'
import headerImage from './_assets/Kumquat.png'

const Footer = styled.div`
  padding: 5px;
  font-size: 0.75em;
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
          <h1>kum<img src={headerImage} alt="kumquat" style={{height: '1em', transform: 'scaleY(-1)'}}/>uat</h1>
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
