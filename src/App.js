import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Box from './Box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  }
}

export default App;
