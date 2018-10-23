import { fetchStatus } from "../reusables/fetchStatus";

export interface NewsItem {
    url: string;
    headline: string;
    source: string;
};
  
export interface NewsList {
    status?: fetchStatus;
    news?: NewsItem[];
};