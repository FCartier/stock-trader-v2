import * as React from "react";
import { formLiveData } from "./utils/formLiveData"
import { IPriceProps } from "./types"
import { Container, CurrencyTag, orange, green } from "./styles";

const Price: React.SFC<IPriceProps> = ({ price, keystats }) => {
  const priceData = formLiveData(price, keystats);

  return priceData ? (
    <Container>
      <CurrencyTag>$</CurrencyTag>
      {priceData.lastSalePrice}
      <div className={priceData.change > 0 ? green : orange}>
          {priceData.change} | {priceData.changePercent}
          <sup>%</sup>
      </div>
    </Container>
  ) : null
}
  

export default Price;