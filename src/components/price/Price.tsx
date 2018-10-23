import * as React from "react";
import { formLiveData } from "./utils/formLiveData";
import { IPriceProps } from "./types";
import { Container, CurrencyTag, orange, green, StockPrice, StockChange } from "./styles";

const Price: React.SFC<IPriceProps> = ({ price, keystats }) => {
  const priceData = formLiveData(price, keystats);

  return priceData ? (
    <Container>
      <StockPrice>
        <CurrencyTag>$</CurrencyTag>
        {priceData.lastSalePrice.toFixed(2)}
      </StockPrice>
      <StockChange className={priceData.change > 0 ? green : orange}>
          {priceData.change} | {priceData.changePercent}
          <sup>%</sup>
      </StockChange>
    </Container>
  ) : null
}
  
export default Price;