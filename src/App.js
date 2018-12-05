import React, { Component } from 'react';
import './App.css';
import TestLifecycle from "./components/TestLifecycle";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <TestLifecycle></TestLifecycle>
      </div>
    );
  }
}

export default App;
