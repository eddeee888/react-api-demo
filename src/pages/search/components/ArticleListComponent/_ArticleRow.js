import React from "react";

const Aux = props => props.children;

const ArticleRow = ({ title, link, dateOfPublication }) => {
  console.log(title, link, dateOfPublication);
  return (
    <Aux>
      <div>
        <a href={link}>{title}</a>
      </div>
      <div>{dateOfPublication}</div>
    </Aux>
  );
};

export default ArticleRow;
