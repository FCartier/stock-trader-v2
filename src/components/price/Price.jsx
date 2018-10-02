import React from "react";

const dynamicDiv = price => {
  let text = '';

  price > 0 
  ? text = "text-green"
  : text = "text-orange";

  return text;
}

const Price = props => {
  const { price } = props;
  
  return Object.keys(price).length ? (
    <div>
      {price && (
        <div className="price">
            <sup>$</sup>{price.close} <div className={dynamicDiv(price.change)}>{price.change} | {price.changePercent}<sup>%</sup></div>
        </div>
      )}
    </div>
  ) : null
};

export default Price;