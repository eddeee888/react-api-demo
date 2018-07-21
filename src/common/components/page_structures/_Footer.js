import React from "react";
import styled from "styled-components";
import { media, sizes } from "./../../media";
import { mainColor, textOnMainColor } from "./../../styles";

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 3.5em;
  background-color: ${mainColor};
  color: ${textOnMainColor};
`;
const StyledFooter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0em 0.5em 0 0.5em;
`;

const Footer = ({ children, ...rest }) => {
  return (
    <StyledWrapper>
      <StyledFooter {...rest}>
        <div>Terms and Conditions</div>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Footer;
