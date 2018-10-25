import styled from "react-emotion"

const StyledContainer = styled('div')`
  @media(min-width: 1000px) {
    max-width: 50%;
  };
  @media(max-width: 1000px) {
    max-width: 80%;
  };
  margin: 10% auto;
  background-color: #414a4c;
  padding: 1vh;
  -webkit-box-shadow: 0 10px 6px -6px #000;
  -moz-box-shadow: 0 10px 6px -6px #000;
  box-shadow: 0 10px 6px -6px #000;
`

export default StyledContainer;