import styled from "react-emotion";

export const MarketFoot = styled("ul")`
  display: flex;
  font-size: 10px;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.marketFooterTop},
    ${props => props.theme.marketFooterBottom}
  );
  width: 100%;
  padding: 0;
  margin: 0;
  height: 5vh;
  color: ${props => props.theme.textColor};

  & li {
    margin: 0 1rem;
  }
`;

export const MarketItem = styled("li");
