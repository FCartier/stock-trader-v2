import styled from 'react-emotion';

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
  margin: 0;
  padding: 1vh 1rem 0 1rem;
  height: 5vh;
  color: ${props => props.theme.textColor};
  bottom: 0px;

  @media (max-width: 1400px) {
    li:nth-last-child(-n+2) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    li:nth-last-child(-n+4) {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    li:nth-last-child(-n+6) {
      display: none;
    }
  }
  
  @media (max-width: 800px) {
    li:nth-last-child(-n+8) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    li:nth-last-child(-n+10) {
      display: none;
    }
  }

  @media (max-width: 450px) {
    li:nth-last-child(-n+12) {
      display: none;
    }
  }
`;
