import { createSlice } from '@reduxjs/toolkit'

/**
 * 这个例子使用了 React Redux 提供的 hooks 写法，而不是传统的 connect 写法，虽然传统的 connect 写法也可以用。
 * 用来维护用户列表的 slice 和 reducer 。
 * 我们把 UserTable 和 UserRow 都连接在这个 slice 上，这样它们就可以共享同一个 state 了。
 * 
 * 备注：定义 *Slice 的本质是，定义好了一个数据结构，以及在此数据结构上可以进行的操作。
 * 然后让需要用到这个数据结构的组件，都连接到这个数据结构上。
 * 如果数据结构发生了变化，所有用到这个数据结构的组件都会收到通知，然后进行相应的处理，可以用“总线”的思想来理解。
 * 这样做的好处是，避免了用 props 传递数据，以及用回调函数传递操作的麻烦。因为有时候组件的层级结构会非常深，用
 * props 一层一层向下传递数据，会导致代码非常复杂，出了 bug 的时候非常难以调试。
 */
export const userListSlice = createSlice({
    name: 'userList',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            return state;
        },
        addUserList: (state, action) => {
            state = action.payload;
            return state;
        },
        deleteUser: (state, action) => {
            state = state.filter(user => user.id !== action.payload);
            return state;
        },
    },
})

export const { addUser, addUserList, deleteUser } = userListSlice.actions

export default userListSlice.reducer