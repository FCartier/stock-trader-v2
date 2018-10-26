import styled from 'react-emotion';
import { css } from "emotion";


export const StockInfoBox = styled('span')`
  background-color: #415f8a;
  color: white;
  padding: 3px 6px 3px 6px;
  float: left;
  margin: 2px;
`

export const stockInfo = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const LastUpdate = styled('span')`
  text-align: right;
  float: right;
  color: grey;
  font-size: 0.7rem;
  padding: 3px;
  margin: 2px;
`

export const MarketStatus = styled('span')`
  text-align: right;
  float: right;
  font-size: 0.7rem;
  padding: 3px;
  margin: 2px;
`

export const List = styled("ul")` 
    padding: 5px 10px 0px 15px;
    display: flex;
    width: 100%;
    margin: 0;
    font-size: 12px;
`;

export const Item = styled("li")`
    display: block;
    flex: 0 1 auto; 
    list-style-type: none;
    padding-right: 0.5rem;
`;

export const link = css`
  color: white;
`
