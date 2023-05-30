import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const store = configureStore({
    reducer:{
        cart:cartReducer
        // you can add more reducer in this
    }
})

export default store