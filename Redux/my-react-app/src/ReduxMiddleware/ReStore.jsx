import RootReducer from './RootReducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
const ReStore = configureStore({
    reducer:RootReducer
})
export default ReStore