import styled from "react-emotion";

export const List = styled("ul")`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: hidden;
  width: 100%;
  height: 1em;
  margin: 1rem 0;
  padding: 0;
`;

export const Item = styled("li")`
  display: block;
  flex: 0 1 auto;
  list-style-type: none;
  padding-left: 0;
  
  & + & {
    padding-left: 1em;
  }
`;
