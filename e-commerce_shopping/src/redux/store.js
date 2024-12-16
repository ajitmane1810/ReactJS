import { configureStore } from "@reduxjs/toolkit"; 
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer : {
        // Add Slice Reducers to the Store 
        cart : cartSlice
    },
    devTools:true
})