import { IPrice, IKeyStats } from "../types";

export const formLiveData = (price: IPrice, keystats: IKeyStats) => {
    if (price.askPrice && keystats.previousClose) {
      return {
        lastSalePrice: price.lastSalePrice,
        change: (price.lastSalePrice - keystats.previousClose).toFixed(3),
        changePercent:
          ((price.lastSalePrice - keystats.previousClose) / keystats.previousClose).toFixed(3)
      };
    } else if (keystats.previousClose && !price.askPrice) {
      console.log("static triggered")
      return {
        lastSalePrice: keystats.previousClose,
        change: keystats.change,
        changePercent: keystats.changePercent
      };
    } else {
      return null;
    }
  };
