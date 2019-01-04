import React, { Component } from 'react';
import './App.css';
import DashBoard from './info/components/dashboard'

class App extends Component {
  render() {
    return (
      <div className="container">
        <DashBoard />
      </div>
    );
  }
}

export default App;
