import React from "react";
import { selectedSymbol } from "../components/search/searchActions"
import { connect } from "react-redux"
import { IMapProps, Props } from "./getDataTypes/types"

const getData = (Component: React.ComponentType) => {
  return connect<null, IMapProps, {}>(
    null,
    { selectedSymbol }
  )(
    class extends React.Component<Props> {
      constructor(props: any) {
        super(props);
      }

      public render() {
        const { symbol } = this.props.match.params;
        this.props.selectedSymbol(symbol);
        return <Component />;
      }
    }
  );
}; 

export default getData;