import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sendCartData } from "../store/cart-actions";
import { cartActions } from "../store/cart-slice";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 230px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px 0px;
  -webkit-box-shadow: 0px 0px 9px -4px #000000;
  box-shadow: 0px 0px 9px -4px #000000;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px 0px;
  }
`;

const ProductName = styled.span`
  font-weight: 600;
  margin-bottom: 10px;
`;

const ProductId = styled.span`
  margin-bottom: 10px;
  color: #a1a1a1;
`;

const ProductColor = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid #a5a5a5;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 10px;
`;

const ProductSize = styled.span`
  color: #a1a1a1;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 24px;
  margin: 0px 10px;
  padding: 2px;
  border: 1px solid teal;
  border-radius: 10px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;
const CartProducts = ({ item }) => {
  const [initial, setInitial] = useState(true);
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const quantityHandler = (type) => {
    if (type === "inc") {
      setInitial(false);
      dispatch(
        cartActions.addToCart({
          productId: item.productId,
          price: item.price,
          quantity: 1,
          sizeChoice: item.sizeChoice,
          colorChoice: item.colorChoice,
        })
      );
    }
    if (type === "dec") {
      setInitial(false);
      dispatch(
        cartActions.removeFromCart({
          productId: item.productId,
          price: item.price,
          quantity: 1,
          sizeChoice: item.sizeChoice,
          colorChoice: item.colorChoice,
        })
      );
    }
  };

  useEffect(() => {
    const sendRequestData = async () => {
      try {
        await sendCartData(user?._id, user?.accessToken, cart);
      } catch (error) {
        console.log(error);
      }
    };

    if (!initial) {
      sendRequestData();
    }
  }, [dispatch, user, cart, initial]);

  return (
    <Product key={item._id}>
      <ProductDetail>
        <Image src={item.productId.img} />
        <Details>
          <ProductName>{item.productId.title.toUpperCase()}</ProductName>
          <ProductId>31023811233</ProductId>
          <ProductColor color={item.colorChoice} />
          <ProductSize>
            <b>SIZE : </b> {item.sizeChoice}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Remove
            style={{ cursor: "pointer" }}
            onClick={quantityHandler.bind(null, "dec")}
          />
          <ProductAmount>{item.quantity}</ProductAmount>
          <Add
            style={{ cursor: "pointer" }}
            onClick={quantityHandler.bind(null, "inc")}
          />
        </ProductAmountContainer>
        <ProductPrice>Rp. {item.price}</ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartProducts;
