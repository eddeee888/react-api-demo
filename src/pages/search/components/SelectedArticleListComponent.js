import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  ArticleDetails,
  StyledArticleRowWrapper,
  StyledArticleWrapper,
  StyledArticleActionWrapper
} from "../common/components";
import { A, H2 } from "./../../../common/components/ui";
import {
  borderColor,
  secondaryBackgroundColor
} from "./../../../common/styles";
import { isEmptyObject } from "./../../../common/functions/general_functions";

const StyledMainWrapper = styled.div`
  position: fixed;
  border-top: 1px solid ${borderColor};
  bottom: 3.5em;
  padding: 0.5em 2em;
  background-color: ${secondaryBackgroundColor};
  width: 100%;
`;

const SelectedArticleListComponent = ({
  selectedArticles,
  toggleArticleInSelectedArticles
}) => {
  return (
    <div>
      {!isEmptyObject(selectedArticles) && (
        <StyledMainWrapper>
          <H2>Pinned articles</H2>

          {Object.keys(selectedArticles).map(selectedArticleId => {
            return (
              <StyledArticleRowWrapper key={selectedArticleId}>
                <StyledArticleWrapper>
                  <ArticleDetails
                    key={selectedArticles[selectedArticleId].id}
                    link={selectedArticles[selectedArticleId].link}
                    title={selectedArticles[selectedArticleId].title}
                    dateOfPublication={
                      selectedArticles[selectedArticleId].dateOfPublication
                    }
                  />
                </StyledArticleWrapper>
                <StyledArticleActionWrapper>
                  <A
                    onClick={() =>
                      toggleArticleInSelectedArticles(
                        selectedArticles[selectedArticleId]
                      )
                    }
                  >
                    X
                  </A>
                </StyledArticleActionWrapper>
              </StyledArticleRowWrapper>
            );
          })}
        </StyledMainWrapper>
      )}
    </div>
  );
};

SelectedArticleListComponent.poropTypes = {
  selectedArticles: PropTypes.object, //object with id of each article as key
  toggleArticleInSelectedArticles: PropTypes.func // function to toggle selected article
};

export default SelectedArticleListComponent;

/**
 * Note: we can bring <A /> out into its own component
 * to avoid using arrow function here - minimal performance improvement increase
 */
