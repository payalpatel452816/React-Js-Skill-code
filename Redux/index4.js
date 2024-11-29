const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers; 

/* Constants */
const BUY_TOYS = 'BUY_TOYS';
const BUY_Coffee = 'BUY_Coffee';

/* Redux Action Creators */
function buy_toys(){
    return {
        type: BUY_TOYS,
        info: 'first Redux action'
    };
}

function buy_coffee(){
    return {
        type: BUY_Coffee,
        info: 'second Redux action'
    };
}

/* Initial Values */
const initialValue = {
    NumOfToys: 20,
    NumOfCoffee: 20
};

/* Redux Reducers */
const toysReducer = (state = initialValue, action) => {
    switch(action.type){
        case BUY_TOYS:
            return {
                ...state, // Preserve the other state properties
                NumOfToys: state.NumOfToys - 1
            };
        default:
            return state;
    }
};

const coffeeReducer = (state = initialValue, action) => {
    switch(action.type){
        case BUY_Coffee:
            return {
                ...state, // Preserve the other state properties
                NumOfCoffee: state.NumOfCoffee - 1
            };
        default:
            return state;
    }
};

/* Combine Reducers */
const rootReducer = combineReducers({
    toys: toysReducer,
    coffee: coffeeReducer
});

/* Redux Store */
const store = createStore(rootReducer);

console.log('Initial state:', store.getState());

store.subscribe(() => console.log(store.getState()));

// Dispatch actions
store.dispatch(buy_toys());
store.dispatch(buy_toys());
store.dispatch(buy_coffee());
