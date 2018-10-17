import { IPrice, IKeyStats } from "../types"

export const formLiveData = (price: IPrice, keystats: IKeyStats) => {
    if (price.askPrice && keystats.previousClose) {
      return {
        lastSalePrice: price.askPrice,
        change: (price.askPrice - keystats.previousClose).toFixed(3),
        changePercent:
          ((price.askPrice - keystats.previousClose) / keystats.previousClose).toFixed(3)
      };
    } else if (keystats.previousClose && !price.askPrice) {
      return {
        lastSalePrice: keystats.previousClose,
        change: keystats.change,
        changePercent: keystats.changePercent
      };
    } else {
      return null;
    }
  };