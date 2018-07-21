import React from "react";
import PropTypes from "prop-types";
import TextFieldMUI from "@material-ui/core/TextField";

const TextField = ({ id, className, placeholder, label, value, onChange }) => {
  return (
    <TextFieldMUI
      id={id}
      className={className}
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
};

TextField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default TextField;
