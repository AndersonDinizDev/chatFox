import React from "react";

import Header from "../Header";

const Layout = ({ children, isLoginPage, isRegisterPage }) => {
  return (
    <>
      <Header isLoginPage={isLoginPage} isRegisterPage={isRegisterPage} />
      {children}
    </>
  );
};

export default Layout;
