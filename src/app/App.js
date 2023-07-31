import React from 'react';
import UserTable from './components/user-table';
import { Provider } from 'react-redux'
import store from './store'

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserTable></UserTable>
      </div>
    </Provider>
  );
}

export default App;
