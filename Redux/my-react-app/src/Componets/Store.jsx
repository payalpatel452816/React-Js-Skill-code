// import {createStore} from 'redux'
// import ChocoReducer from './Reducer'
// const Store = createStore(ChocoReducer)
// export default Store



// lect24

import RootReducer from './RootReducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
const Store = configureStore({
    reducer:RootReducer
})
export default Store