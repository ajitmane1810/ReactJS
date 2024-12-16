import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // its is function in the reducer we can create funcion
    // for ex - addtocart,deletefromcart,addtowishlist ,quantity add

    // addToCart

    addToCart(state, action) {
      //initail state its empty array
      //using push method in the empty arrray add data
      state.push(action.payload);
    },

    //deleteFromCart

    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// export it for use in other file 
export const {addToCart,deleteFromCart} = cartSlice.actions 

export default cartSlice.reducer;
