import React from "react";
import styled from "styled-components";
import { media, sizes } from "./../../media";
import { mainColor, textOnMainColor } from "./../../styles";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 4em;
  margin-bottom: 4em;
  z-index: 9;
`;
const StyledContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Content = ({ children, ...rest }) => {
  return (
    <StyledWrapper>
      <StyledContent {...rest}>{children}</StyledContent>
    </StyledWrapper>
  );
};

export default Content;
