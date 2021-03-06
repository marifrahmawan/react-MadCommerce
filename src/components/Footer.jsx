import React from 'react';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    background-color: #fcf5f5;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 40%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>COKPED.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus maiores excepturi asperiores ea? Enim et quos nihil,
          explicabo tempora assumenda, ratione cumque illum voluptatum ipsam
          libero consequatur, iste eveniet ab?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products/man"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Man Fashion
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/products/woman"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Woman Fashion
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/accessories"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Accessories
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/profile"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              My Account
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/order-tracking"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Order Tracking
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/wishlist"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Wishlist
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/terms"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Terms
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          123 St. Petersburg Jr., South Caroline 981136
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +62 823 4567 8910
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          contact@cokopedia.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
