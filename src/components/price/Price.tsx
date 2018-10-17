import * as React from "react";
import { Container, CurrencyTag, orange, green } from "./styles";

export interface IPriceProps {
<<<<<<< HEAD
  price: {
=======

  price?: {
>>>>>>> master
    close: number;
    change: number;
    changePercent: number;
    lastSalePrice: number;
<<<<<<< HEAD
=======
    askPrice: number;
>>>>>>> master
  };
}

const Price: React.SFC<IPriceProps> = ({ price }) => {
  return price.close ? (
    <div>
<<<<<<< HEAD
      <Container>
        <CurrencyTag>$</CurrencyTag>
        {price.close}{" "}
=======
      <div className="price">
        <sup>$</sup>
        {price.close.toFixed(2)}{" "}
>>>>>>> master
        <div className={dynamicDiv(price.change)}>
          {price.change} | {price.changePercent}
          <sup>%</sup>
        </div>
<<<<<<< HEAD
      </Container>
    </div>
  ) : (
    <Container>
      <CurrencyTag>$</CurrencyTag>
      {price.lastSalePrice}
    </Container>
=======
      </div>
    </div>
  ) : (
    <div className="price">
      
      {price.askPrice ? (
        <div>
          <sup>$</sup>
          {price.askPrice.toFixed(2)}
        </div>
      ) : null} 
    </div>
>>>>>>> master
  );
};

const dynamicDiv = (price: number) => {
<<<<<<< HEAD
  return price > 0 ? orange : green;
};

=======
  return price > 0 ? "text-green" : "text-orange";
};


>>>>>>> master
export default Price;
