import CartReducer from "./CartReducer";
import WishlistReducer from "./WishlistReducer";
import ProductReducer from "./ProductReducer";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
    cart:CartReducer,
    wishlist:WishlistReducer,
    product:ProductReducer
})
export default RootReducer