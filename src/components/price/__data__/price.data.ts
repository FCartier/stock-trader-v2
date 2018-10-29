import PriceState, { IPriceProps } from "../types";

export const data: IPriceProps = {
  price: {
    change: -0.96,
    changePercent: -0.432,
    askPrice: 221.19,
    lastSalePrice: 221.29,
  },
  keystats: {
    previousClose: 221.19,
    change: -0.96,
    changePercent: -0.432
  }
};

// TODO: In sprint 5 - remove the price data and check how the
// Price component will be rendered
export const priceData: PriceState = {
  askPrice: 0,
  askSize: 0,
  bidPrice: 0,
  bidSize: 0,
  lastSalePrice: 6.85,
  lastSaleSize: 100,
  lastSaleTime: 1540324782013,
  lastUpdated: 1540324923026,
  marketPercent: 0.0595,
  sector: "healthcareequipmentservices",
  securityType: "commonstock",
  seq: 265,
  symbol: "AAC",
  volume: 6468
};
