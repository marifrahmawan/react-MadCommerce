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
          product.sizeChoice === newItem.sizeChoice &&
          product.colorChoice === newItem.colorChoice
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
      const decreasedItem = action.payload;

      const existingProduct = state.products.find(
        (product) =>
          product.productId._id === decreasedItem.productId._id &&
          product.sizeChoice === decreasedItem.sizeChoice &&
          product.colorChoice === decreasedItem.colorChoice
      );

      if (
        existingProduct.quantity === 1 &&
        existingProduct.sizeChoice === decreasedItem.sizeChoice &&
        existingProduct.colorChoice === decreasedItem.colorChoice
      ) {
        state.products = state.products.filter(
          (item) => item._id !== existingProduct._id
        );
        state.totalPrice = state.totalPrice - decreasedItem.price;
        state.totalQuantity--;
      } else {
        existingProduct.quantity--;
        state.totalPrice = state.totalPrice - decreasedItem.price;
        state.totalQuantity--;
      }
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
