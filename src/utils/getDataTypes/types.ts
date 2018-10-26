import { SelectedSymbol } from "../../components/search/searchActions"

export interface Props {
  match: {
    params: {
      symbol: string;
    };
  };
  selectedSymbol?: (input: string) => SelectedSymbol;
}

export interface IMapProps {
  selectedSymbol?: (input: string) => SelectedSymbol;
}
