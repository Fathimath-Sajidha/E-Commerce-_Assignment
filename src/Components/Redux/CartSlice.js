import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'cartData',
  initialState: {
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload);  // Add item to cart
    },
    setCartCount: (state, action) => {
      state.cartCount += action.payload || 1;  // Increment by payload or default 1
    }
  }
});

export const { setCartItems, setCartCount } = slice.actions;
export default slice.reducer;