import { configureStore } from '@reduxjs/toolkit'
import userListReducer from './components/userSlice';

export default configureStore({
    reducer: {
        userList: userListReducer,
    },
})