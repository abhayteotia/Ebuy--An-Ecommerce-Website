import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";
import {
     productReducer,
     productDetailsReducer,
     newReviewReducer,

} from "./reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { myOrdersReducer, orderDetailsReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    NewReview: newReviewReducer,
});

let initialState = {
    cart: {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shipingInfo"))
    : {},
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;