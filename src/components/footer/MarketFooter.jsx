import React from "react";

const MarketFooter = props => {
  const { market } = props;
  
  return (
    <div>
      <ul className="market-foot">
        {market &&
          market.map(item => <li key={item.mic}><p><strong>{item.venueName}</strong>  {item.marketPercent}%</p></li>)}
      </ul>
    </div>
  );
};

export default MarketFooter;
