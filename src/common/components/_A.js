import React from "react";

const A = ({ children, ...rest }) => {
  return <a {...rest}>{children}</a>;
};

export default A;
