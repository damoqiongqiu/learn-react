import { createSlice } from '@reduxjs/toolkit'

/**
 * 用来维护用户列表的 slice 和 reducer 。
 * 我们把 UserTable 和 UserRow 都连接在这个 slice 上，这样它们就可以共享同一个 state 了。
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