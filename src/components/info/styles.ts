import styled from 'react-emotion'
import { css } from "emotion"


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