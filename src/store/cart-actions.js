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
      // console.log(cartData);
      dispatch(
        cartActions.replaceCart({
          products: cartData.products,
          totalPrice: cartData.totalPrice,
          totalQuantity: cartData.totalQuantity,
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
