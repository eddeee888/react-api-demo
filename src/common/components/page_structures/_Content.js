import React from "react";
import styled from "styled-components";
import { media, sizes } from "./../../media";
import { mainColor, textOnMainColor } from "./../../styles";

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
`;
const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
  ${media.medium`width: ${sizes.medium}px`};
  ${media.large`width: ${sizes.large}px`};
  ${media.extraLarge`width: ${sizes.extraLarge}px`};
`;
const Content = ({ children, ...rest }) => {
  return (
    <StyledContainer>
      <StyledContent {...rest}>{children}</StyledContent>
    </StyledContainer>
  );
};

export default Content;
