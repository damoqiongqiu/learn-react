import React, { Component } from 'react';
import './App.css';
import Father from "./components/Father";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Father></Father>
      </div>
    );
  }
}

export default App;
