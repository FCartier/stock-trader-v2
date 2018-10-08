import React from "react";

const dynamicDiv = price => {
  let text = '';

  price > 0 
  ? text = "text-green"
  : text = "text-orange";

  return text;
}

const LivePrice = ({price}) => {
  const { lastSalePrice } = price;
  console.log(lastSalePrice)
  return Object.keys(price).length ? (
    <div>

        <div className="price">
            <sup>$</sup>{lastSalePrice}
        </div>

    </div>
  ) : null
};

export default LivePrice;