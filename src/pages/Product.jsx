import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { publicRequest } from '../tools/requestMethod';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import GoTop from '../tools/GoTop';
import { cartActions } from '../store/cart-slice';

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  @media only screen and (max-width: 480px) {
    height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  @media only screen and (max-width: 480px) {
    padding: 0px;
    margin-top: 25px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #b6b6b6;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  padding: 2px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f4f4;
    transition: all 0.3s ease;
  }
`;

const Product = () => {
  const param = useParams();
  const parameter = param.productId;
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1);
    }

    if (type === 'inc') {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${parameter}`);
        setProduct(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [parameter]);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        productId: product._id,
        price: product.price,
        quantity: quantity,
      })
    );
  };

  return (
    <>
      <Announcement />
      <Navbar />
      {isLoading && <LoadingSpinner />}
      <Wrapper>
        {!isLoading && (
          <>
            <ImgContainer>
              <Image src={product.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{product.title}</Title>
              <Desc>{product.desc}</Desc>
              <Price>Rp. {product.price}</Price>

              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>

                  {product.color.map((color) => (
                    <FilterColor
                      color={color}
                      key={color}
                      onClick={() => setColor(color)}
                    />
                  ))}
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize onChange={(e) => setSize(e.target.value)}>
                    {product.size.map((size) => (
                      <FilterSizeOption key={size}>{size}</FilterSizeOption>
                    ))}
                  </FilterSize>
                </Filter>
              </FilterContainer>

              <AddContainer>
                <AmountContainer>
                  <Remove
                    onClick={handleQuantity.bind(null, 'dec')}
                    style={{ cursor: 'pointer' }}
                  />
                  <Amount>{quantity}</Amount>
                  <Add
                    onClick={handleQuantity.bind(null, 'inc')}
                    style={{ cursor: 'pointer' }}
                  />
                </AmountContainer>
                <Button onClick={addToCartHandler}>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
          </>
        )}
      </Wrapper>
      <Newsletter />
      <Footer />
      <GoTop />
    </>
  );
};

export default Product;
