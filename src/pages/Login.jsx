import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user-actions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://images.unsplash.com/photo-1523950704592-ee4866469b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80")
      center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  @media only screen and (max-width: 480px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;

  @media only screen and (max-width: 480px) {
    margin: 11px 0;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  :disabled {
    color: teal;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const Link = styled.a`
  margin: 3px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ErrorBox = styled.div`
  font-weight: 300;
  color: red;
  margin-bottom: 5px;
`;

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    login(dispatch, username, password);
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={loginHandler}>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button disabled={isFetching}>LOGIN</Button>
          {error && <ErrorBox>Invalid username or password</ErrorBox>}
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
