import styled from "styled-components";
import { borderColor } from "./../../../../common/styles";

const StyledArticleRowWrapper = styled.div`
  padding: 0.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${borderColor};
`;

export default StyledArticleRowWrapper;
