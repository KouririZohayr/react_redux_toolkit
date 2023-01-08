import {configureStore}  from '@reduxjs/toolkit'
import userlisteReducer  from './userSlice'
const Store = configureStore({
    reducer: {
        users:userlisteReducer,
    }
})
export default Store