import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import productReducer from "./productSlice"


const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
        // you can add more reducer in this
    }
})

export default store