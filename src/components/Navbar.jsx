import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { logout } from "../store/user-slice";

const Container = styled.div`
  height: 60px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 480px) {
    padding: 10px 0px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  @media only screen and (max-width: 480px) {
    margin-left: 10px;
    margin-right: 5px;
    width: 80px;
  }
`;

const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  padding: 5px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 480px) {
    justify-content: center;
    flex: 2;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>COKPED</Logo>
        </Center>
        <Right>
          {user !== null && <button onClick={logoutHandler}>Logout</button>}
          {user === null && (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}

          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={totalQuantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
