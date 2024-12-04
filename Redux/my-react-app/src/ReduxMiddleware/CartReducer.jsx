import React from "react";
import {ADD_TO_CART , REMOVE_TO_CART ,EMPTY_CART ,CART_TO_WISHLIST} from '../ReduxMiddleware/Constants';

const CartReducer = (state, action) =>{
    switch(action.type){
        case ADD_TO_CART:

            return{
                
            };

        case REMOVE_TO_CART:
            return{

            };

        case EMPTY_CART:
            return{...state, items: []};

        case CART_TO_WISHLIST:
            return{

            };

        default:
            return state;
    }
}
export default CartReducer