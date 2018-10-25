import styled from "react-emotion";

export const List = styled("ul")`
    display: flex;
    text-align: left;
    justify-content: left;
    width: 100%;
    margin: 0;
    padding: 1rem 0;
`;

export const Item = styled("li")`
    display: block;
    flex: 0 1 auto; 
    list-style-type: none;
    padding-right: 1rem;
    padding-left: 0;
`;
