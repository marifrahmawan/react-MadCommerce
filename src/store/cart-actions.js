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

export const sendCartData = (userId, accessToken, productData) => {
  return async (dispatch) => {
    const sendData = async () => {
      dispatch(cartActions.addToCart(productData));
    };

    try {
      await sendData();
      // await userRequest(accessToken).put(`/cart/${userId}`, {});
    } catch (error) {
      console.log(error);
    }
  };
};
