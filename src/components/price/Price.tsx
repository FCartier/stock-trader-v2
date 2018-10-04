import * as React from "react";

export interface IPriceProps {
    price: {
        close: number;
        change: number;
        changePercent: number;
    }
}

const Overview: React.SFC<IPriceProps> = ({price}) => {
    return price.close ? (
      <div>
        <div className='price'>
            <sup>$</sup>{price.close} <div className={dynamicDiv(price.change)}>{price.change} | {price.changePercent}<sup>%</sup></div>
        </div>
      </div>
    ): null;
}

const dynamicDiv = (price: number) => {
    return price > 0 ? "text-green" : "text-orange";
}
  
export default Overview;