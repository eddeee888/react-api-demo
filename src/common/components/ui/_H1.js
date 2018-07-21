import React from "react";

const H1 = ({ children, ...rest }) => {
  return <h1 {...rest}>{children}</h1>;
};

export default H1;
