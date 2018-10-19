import styled from 'react-emotion'
import { css } from 'emotion'

const orangeHex = '#df5455'
const greenHex = '#6fb792'

export const Container = styled('div')`
  font-size: 2em;
  display: inline-block;
`

export const orange = css`
  color: ${orangeHex};
  display: inline-block;
`

export const green = css`
  color: ${greenHex};
  display: inline-block;
`
  
export const CurrencyTag = styled('sup')`
  font-size: 0.5em
`

export const StockPrice = styled('div')`
  margin-right: 1.5rem;
  margin-botton: 0;
  padding: 0;
  display: inline-block;
`

export const StockChange = styled('div')`
  margin-right: 10px;
  margin-botton: 0;
  display: inline-block;
`
