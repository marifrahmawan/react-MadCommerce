import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      state.totalQuantity = state.totalQuantity + newItem.quantity;

      const existingProduct = state.products.find(
        (product) => product.productId === newItem.productId
      );
      if (!existingProduct) {
        state.products.push({
          productId: newItem.productId,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        existingProduct.quantity = existingProduct.quantity + 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
