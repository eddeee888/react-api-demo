import React from "react";
import styled from "styled-components";
import { mainColor } from "./../../styles";

const StyledA = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  color: ${mainColor};
`;

const A = ({ children, ...rest }) => {
  return <StyledA {...rest}>{children}</StyledA>;
};

export default A;
