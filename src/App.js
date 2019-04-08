import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Abhii" heroName="Main">
          <p>KEM CHO BHAI..</p>
          <span>test</span>
        </Greet>
        <Greet name="Shivam" heroName="NotMain"></Greet>
        <Welcome>
          <p>test welcome</p>
        </Welcome>
      </div>
    );
  }
}

export default App;
