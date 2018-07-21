import React from "react";
import styled from "styled-components";
import { H1 } from "./../ui";
import { media, sizes } from "./../../media";
import { mainColor, textOnMainColor } from "./../../styles";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 3.5em;
  background-color: ${mainColor};
  color: ${textOnMainColor};
  z-index: 10;
`;
const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0em 0.5em 0 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.medium`
    justify-content: left;  
  `};
`;

const Header = ({ children, ...rest }) => {
  return (
    <StyledWrapper>
      <StyledHeader {...rest}>
        <H1>react-api-demo</H1>
      </StyledHeader>
    </StyledWrapper>
  );
};

export default Header;
