import styled from "react-emotion";

export const MarketFoot = styled("ul")`
  display: flex;
  font-size: 10px;
  list-style-type: none;
  align-items: stretch;
  justify-content: space-around;
  background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.marketFooterTop},
    ${props => props.theme.marketFooterBottom}
  );
  overflow: hidden;
  width: calc(100% - 2rem);
  padding: 1vh 1rem 0 1rem;
  
  margin: 0;
  height: 5vh;
  color: ${props => props.theme.textColor};
`;

export const MarketItem = styled("li");
