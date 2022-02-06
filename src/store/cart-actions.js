// import axios from "axios";
import { userRequest } from "../tools/requestMethod";
import { cartActions } from "./cart-slice";

export const fetchCartData = (userId, accessToken) => {
  return async (dispatch) => {
    const sendRequestToFetch = async () => {
      try {
        const response = await userRequest(accessToken).get(`/cart/${userId}`);

        return response.data;
      } catch (error) {
        console.log(error);
      }
    };

    try {
      const cartData = await sendRequestToFetch();

      dispatch(
        cartActions.replaceCart({
          products: cartData.cart.products ? cartData.cart.products : [],
          totalPrice: cartData.cart.totalPrice ? cartData.cart.totalPrice : 0,
          totalQuantity: cartData.cart.totalQuantity
            ? cartData.cart.totalQuantity
            : 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = async (userId, accessToken, productData) => {
  try {
    const response = await userRequest(accessToken).put(`/cart/${userId}`, {
      userId: userId,
      products: productData.products,
      totalPrice: productData.totalPrice,
      totalQuantity: productData.totalQuantity,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartData = async (userId, accessToken, cartProductId) => {
  try {
    const response = await userRequest(accessToken).put(
      `/cart/remove-cart-product/${userId}`,
      {
        cartProductId,
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
