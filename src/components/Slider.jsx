import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    height: 40vh;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cccccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  :hover {
    opacity: 1;
  }

  @media only screen and (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  @media only screen and (max-width: 480px) {
    height: 40vh;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    height: 70%;
  }
`;

const Image = styled.img`
  height: 85%;
  width: 65%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 1px 1px 5px 2px rgba(148, 148, 148, 0.75);
  -webkit-box-shadow: 1px 1px 5px 2px rgba(148, 148, 148, 0.75);
  -moz-box-shadow: 1px 1px 5px 2px rgba(148, 148, 148, 0.75);

  @media only screen and (max-width: 480px) {
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  width: 100%;

  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 70px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    text-align: justify;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 10px;
    padding: 5px;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }

    if (direction === 'right') {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={handleClick.bind(null, 'left')}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide key={item.id} bg={item.bg}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>

              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>

      <Arrow direction="right" onClick={handleClick.bind(null, 'right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
