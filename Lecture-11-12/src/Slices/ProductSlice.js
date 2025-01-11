import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
