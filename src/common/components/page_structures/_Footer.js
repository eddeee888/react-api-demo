import React from "react";
import styled from "styled-components";
import { media, sizes } from "./../../media";
import { mainColor, textOnMainColor } from "./../../styles";

const StyledContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: ${mainColor};
  color: ${textOnMainColor};
`;
const StyledFooter = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  ${media.medium`width: ${sizes.medium}px`};
  ${media.large`width: ${sizes.large}px`};
  ${media.extraLarge`width: ${sizes.extraLarge}px`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children, ...rest }) => {
  return (
    <StyledContainer>
      <StyledFooter {...rest}>
        <div>Terms and Conditions</div>
      </StyledFooter>
    </StyledContainer>
  );
};

export default Footer;
