export interface IPrice {
    change: number;
    changePercent: number;
    askPrice: number;
    lastSalePrice: number;
}

export interface IKeyStats {
    previousClose: number;
    change: number;
    changePercent: number;
}

export interface IPriceProps {
    price?: IPrice,
    keystats?: IKeyStats
}

export default interface Price {
    askPrice: number,
    askSize: number,
    bidPrice: number,
    bidSize: number
    lastSalePrice: number,
    lastSaleSize: number,
    lastSaleTime: number
    lastUpdated: number,
    marketPercent: number
    sector: string,
    securityType: string,
    seq: number,
    symbol: string,
    volume: number
};