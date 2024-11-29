const redux = require('redux')
const createStore = redux.createStore
const {combineReducers}  = require('redux')
const {applyMiddleware} = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

/* constant */
const BUY_CHOCOLATE = 'BUY_CHOCOLATE'
const BUY_CAKE = 'BUY_CAKE'
const BUY_MUFFIN = 'BUY_MUFFIN'  // New action type for muffin
const BUY_Coffee = 'BUY_Coffee' // New action type for

/* REDUX ACTION */
function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'first redux action'
    }
}

function buy_cake(){
    return{
        type:BUY_CAKE,
        info:'first redux action'
    }
}

function buy_muffin(){  // New action creator for muffin
    return{
        type:BUY_MUFFIN,
        info:'second redux action'
    }
}

function buy_coffee(){  // New action creator for coffee
    return{
        type:BUY_COFFEE,
        info:'third redux action'
    }
}

/* initialState for redux */
const initialState = {
    NumOfChocolate : 20,
    NumOfCake : 30,
    NumOfMuffin: 50, 
    NumOfCoffee: 100  // New state property for coffee
}

/* Redux Reducer */
const ChocoReducer = (state = initialState , action) => {
 switch(action.type){
    case BUY_CHOCOLATE : return{
        ...state,
        NumOfChocolate:state.NumOfChocolate - 1
    }
    default:return state
 }
}

const CakeReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            NumOfCake:state.NumOfCake - 1
        }
        default:return state
    }
}

const MuffinReducer = (state = initialState , action) => {  // New reducer for muffins
    switch(action.type){
        case BUY_MUFFIN : return{
            ...state,
            NumOfMuffin:state.NumOfMuffin - 1
        }
        default:return state
    }
}

const CoffeeReducer = (state = initialState , action) => {  // New reducer for coffee
    switch(action.type){
        case BUY_COFFEE : return{
            ...state,
            NumOfCoffee:state.NumOfCoffee - 1
        }
        default:return state
    }
}

/* redux store */
const rootReducer = combineReducers({
    ChocoReducer,
    CakeReducer,
    MuffinReducer  
})

const store = createStore(rootReducer , applyMiddleware(logger))

console.log(store.getState());

const unsubscribe  =  store.subscribe(() => console.log(store.getState()))

// Dispatch actions
store.dispatch(buy_chocolate())
store.dispatch(buy_chocolate())
store.dispatch(buy_cake())
store.dispatch(buy_muffin()) 
store.dispatch(buy_Coffee())

unsubscribe() 
