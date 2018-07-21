import React from "react";
import PropTypes from "prop-types";
import CheckboxMUI from "@material-ui/core/Checkbox";

const Checkbox = ({ checked, onChange }) => {
  return <CheckboxMUI checked={checked} onChange={onChange} />;
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
