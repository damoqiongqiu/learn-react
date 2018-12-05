import React, { Component } from 'react';
import './App.css';
import MyPanel from './components/MyPanel';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <MyPanel></MyPanel>
      </div>
    );
  }
}

export default App;
