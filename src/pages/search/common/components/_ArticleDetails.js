import React from "react";
import PropTypes from "prop-types";
import { A } from "./../../../../common/components/ui";

const ArticleDetails = ({ title, link, dateOfPublication }) => {
  return (
    <div>
      <div>
        <A href={link}>{title}</A>
      </div>
      <div>Published date: {dateOfPublication}</div>
    </div>
  );
};

ArticleDetails.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  dateOfPublication: PropTypes.string
};

export default ArticleDetails;
