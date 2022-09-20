import { combineReducers } from "redux";
import OpenCartReducer from "./OpenCartReducer";
import CartItemsReducer from "./CartItemsReducer";

const reducers = combineReducers({
    cartIsOpen: OpenCartReducer,
    cartItems: CartItemsReducer,
});

export default reducers;
