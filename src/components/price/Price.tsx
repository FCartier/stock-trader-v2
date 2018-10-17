import * as React from "react";
import { formLiveData } from "./utils/formLiveData"
import { IPriceProps } from "./types"


const Price: React.SFC<IPriceProps> = ({ price, keystats }) => {
  const priceData = formLiveData(price, keystats);

  return priceData ? (
    <div className="price">
      <sup>$</sup>
      {priceData.lastSalePrice}
      <div className={priceData.change > 0 ? "text-green" : "text-orange"}>
          {priceData.change} | {priceData.changePercent}
          <sup>%</sup>
      </div>
    </div>
  ) : null
};


export default Price;
