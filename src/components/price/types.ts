export interface IPrice {
    change: number;
    changePercent: number;
    askPrice: number;
}

export interface IKeyStats {
    previousClose: number;
    change: number;
    changePercent: number;
}

export interface IPriceProps {
    price: IPrice,
    keystats: IKeyStats
  }

