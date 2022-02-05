import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
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
        (product) =>
          product.productId._id === newItem.productId._id &&
          product.sizeChoice === newItem.sizeChoice
      );

      if (!existingProduct) {
        state.products.push({
          productId: newItem.productId,
          price: newItem.price,
          quantity: newItem.quantity,
          colorChoice: newItem.colorChoice,
          sizeChoice: newItem.sizeChoice,
        });
      } else {
        existingProduct.quantity = existingProduct.quantity + 1;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId._id === id
      );
      state.totalQuantity--;
    },

    replaceCart(state, action) {
      state.products = action.payload.products || [];
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
