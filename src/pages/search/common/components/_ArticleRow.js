import React from "react";
import PropTypes from "prop-types";
import { A } from "./../../../../common/components/ui";

const ArticleRow = ({ title, link, dateOfPublication }) => {
  return (
    <div>
      <A href={link}>{title}</A>
      <span>{dateOfPublication}</span>
    </div>
  );
};

ArticleRow.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  dateOfPublication: PropTypes.string
};

export default ArticleRow;
