import React from "react";

const H2 = ({ children, ...rest }) => {
  return <h2 {...rest}>{children}</h2>;
};

export default H2;
