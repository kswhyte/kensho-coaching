import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kensho Coaching</h2>
        </div>
        <p className="App-intro">
          <em>Kensho</em> means seeing one's true nature; perceiving the self.
          The kensho experience is a pure realization of shunyata without duality of "seer" and "the thing seen."
          Kensho is often spoken of as an initial or opening experience of enlightenment that requires further realization and deepening.
        </p>
      </div>
    );
  }
}

export default App;
