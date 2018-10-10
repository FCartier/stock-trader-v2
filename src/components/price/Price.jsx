import React from "react";

const Price = ({price}) => {
   return renderCondition(price) ? (
    <div>
        <div className="price">
            <sup>$</sup>{price}
        </div>
    </div>
   ) : null
};


function renderCondition(price){
  if (price === 0) {
    return false
  } else {
    return true
  }
}


export default Price;