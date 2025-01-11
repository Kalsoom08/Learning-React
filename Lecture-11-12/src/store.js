import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './Slices/ProductSlice';

const store = configureStore({
  reducer: {
    product: ProductsReducer,
  },
});

export default store;
