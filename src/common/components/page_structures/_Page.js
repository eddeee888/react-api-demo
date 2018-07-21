import React from "react";
import styled from "styled-components";
import { media } from "./../../media";
import { textColor } from "./../../styles";

const StyledPage = styled.div`
  font-family: "Arial";
  font-size: 14px;
  width: 100%;
  padding: 0;
  margin: 0;
  color: ${textColor};
  ${media.medium`font-size: 16px`};
`;

const Page = ({ children, ...rest }) => {
  return <StyledPage {...rest}>{children}</StyledPage>;
};

export default Page;
