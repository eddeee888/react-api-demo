import React from "react";
import styled from "styled-components";
import { H1 } from "./../ui";
import { media, sizes } from "./../../media";
import { mainColor, textOnMainColor } from "./../../styles";

const StyledContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  background-color: ${mainColor};
  color: ${textOnMainColor};
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.medium`
    width: ${sizes.medium}px; 
    justify-content: left;  
  `};
  ${media.large`width: ${sizes.large}px`};
  ${media.extraLarge`width: ${sizes.extraLarge}px`};
`;

const Header = ({ children, ...rest }) => {
  return (
    <StyledContainer>
      <StyledHeader {...rest}>
        <H1>react-api-demo</H1>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
