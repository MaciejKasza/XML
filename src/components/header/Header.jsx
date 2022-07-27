import React from "react";

//Others
import image from "../../assets/logo.svg";

//Components

// Style
import { HeaderWrapper, StyledHeader, StyledImage } from "./Header.styled";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <StyledImage src={image} alt="Salesmanago logo" />
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;
