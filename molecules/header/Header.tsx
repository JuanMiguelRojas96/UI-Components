import React from "react";
import { HeaderContainer } from "./Header.style";

const Header = ({title}: {title: string}) => {
  return (
      <HeaderContainer>
        <h1>{title}</h1>
      </HeaderContainer>
  );
};

export default Header;
