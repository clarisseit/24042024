import { configureStore , combineReducers } from "@reduxjs/toolkit"; 
import  cartReducer  from "./action";
import authReducer from "./AuthSlice";
const Store =  configureStore({
  reducer:{
    carts: cartReducer,
    auth:authReducer,
  }
})

export default Store
