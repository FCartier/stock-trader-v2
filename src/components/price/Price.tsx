import * as React from "react";
import { Container, CurrencyTag, orange, green } from "./styles";

export interface IPriceProps {
  price?: {
    close: number;
    change: number;
    changePercent: number;
    lastSalePrice: number;
  };
}

const Price: React.SFC<IPriceProps> = ({ price }) => {
  return price.close ? (
    <div>
      <Container>
        <CurrencyTag>$</CurrencyTag>
        {price.close}{" "}
        <div className={dynamicDiv(price.change)}>
          {price.change} | {price.changePercent}
          <sup>%</sup>
        </div>
      </Container>
    </div>
  ) : (
    <Container>
      <CurrencyTag>$</CurrencyTag>
      {price.lastSalePrice}
    </Container>
  );
};

const dynamicDiv = (price: number) => {
  return price > 0 ? orange : green;
};


export default Price;
