import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  margin: 10px 0px;
  -webkit-box-shadow: 0px 0px 9px -4px #000000;
  box-shadow: 0px 0px 9px -4px #000000;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
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

const PriceDetails = styled.div`
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

const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  border: none;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shipping Bag (2)</TopText>
            <TopText>Your Wishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.shopify.com/s/files/1/0933/1060/products/nike-air-max-90-summit-white-thunder-blue-cement-grey-1_1200x630.jpg?v=1628873646" />
                <Details>
                  <ProductName>JESSIE THUNDER SHOES</ProductName>
                  <ProductId>31023811233</ProductId>
                  <ProductColor color="white" />
                  <ProductSize>
                    <b>SIZE : </b> 39 (UK)
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 299</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/c/s/csp53477box.png" />
                <Details>
                  <ProductName>HAKURA T-SHIRT</ProductName>
                  <ProductId>562123123</ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>SIZE : </b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 5</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 309</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 1.59</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shiping Discount</SummaryItemText>
              <SummaryItemPrice>$ -1.59</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 309</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Cart;
