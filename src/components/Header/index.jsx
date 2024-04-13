import React, { useState } from "react";

import Logo from "../../assets/logo.svg";

import { Header as HeaderComponent } from "./styles";
import { LogoDiv, ListLink, ButtonsDiv } from "./styles";

const Header = ({ ...props }) => {
  const [buttonLoginSelected, setButtonLoginSelected] = useState(false);
  const [buttonRegisterSelected, setButtonRegisterSelected] = useState(true);

  return (
    <HeaderComponent {...props}>
      <LogoDiv>
        <img src={Logo} alt="logo" />
        <h2>ChatFox</h2>
      </LogoDiv>
      <ListLink>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Chat</button>
        </li>
      </ListLink>
      <ButtonsDiv>
        <button
          onClick={() => {
            setButtonLoginSelected(true);
            setButtonRegisterSelected(false);
          }}
          style={{
            backgroundColor: buttonLoginSelected ? "#7f56d9" : "transparent",
            color: buttonLoginSelected ? "#fff" : "#475467",
            border: buttonLoginSelected ? "1px solid #7f56d9" : "none",
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setButtonRegisterSelected(true);
            setButtonLoginSelected(false);
          }}
          style={{
            backgroundColor: buttonRegisterSelected ? "#7f56d9" : "transparent",
            color: buttonRegisterSelected ? "#fff" : "#475467",
            border: buttonRegisterSelected ? "1px solid #7f56d9" : "none",
          }}
        >
          Cadastro
        </button>
      </ButtonsDiv>
    </HeaderComponent>
  );
};

export default Header;
