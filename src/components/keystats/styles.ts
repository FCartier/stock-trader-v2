import styled from "react-emotion";

export const List = styled("ul")`
  list-style-type: none;
  padding-left: 0;

  li {
    border-bottom: 2px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    p {
      width: 49%;
    }

    h5 {
      text-align: right;
      padding: 0px;
      margin: 0px;
      width: 49%;
    }
  }

  @media (max-width: 950px) {
    margin: 0;
  }
`;

export const Row = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 950px) {
    display: block;
  }
`;

export const Column = styled("div")`
  width: 49%;

  @media (max-width: 950px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;
