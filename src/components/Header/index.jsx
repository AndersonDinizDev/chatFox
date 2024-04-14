import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import { Header as HeaderComponent } from "./styles";
import { LogoDiv, ListLink, ButtonsDiv, Button } from "./styles";

const Header = ({ isLoginPage, isRegisterPage, ...props }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const goToChat = () => {
    navigate("/chat");
  };

  return (
    <HeaderComponent {...props}>
      <LogoDiv>
        <img src={Logo} alt="logo" />
        <h2>ChatFox</h2>
      </LogoDiv>
      <ListLink>
        <li>
          <button onClick={goToHome}>Home</button>
        </li>
        <li>
          <button onClick={goToChat}>Chat</button>
        </li>
      </ListLink>
      <ButtonsDiv>
        <Button
          isSelected={isLoginPage}
          onClick={() => {
            goToLogin();
          }}
        >
          Login
        </Button>
        <Button
          isSelected={isRegisterPage}
          onClick={() => {
            goToRegister();
          }}
        >
          Cadastro
        </Button>
      </ButtonsDiv>
    </HeaderComponent>
  );
};

export default Header;
