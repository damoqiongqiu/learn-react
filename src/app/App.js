import React, { createContext, useContext } from 'react';
import UserTable from './components/user-table';

import './App.scss';

const UserContext = createContext({ userName: 'admin', nickName: '管理员' });

function App() {
  //无论层级有多深，任何组件都能读取 UserContext 的值
  //React 会往上找到最近的 UserContext.Provider，然后使用它的值
  //当 Provider 的 value 值发生变化时，React 会保证它内部的所有子层级组件都会重新渲染
  //关于 useContext 的更多使用规则，参考：https://react.dev/reference/react/useContext
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  return (
    <UserContext.Provider value={{}}>
      <div className="App">
        <UserTable></UserTable>
      </div>
    </UserContext.Provider>
  );
}

export default App;
