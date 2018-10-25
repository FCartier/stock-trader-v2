import React from "react";
import { selectedSymbol } from "../components/search/searchActions"
import { connect } from "react-redux"
import { IMapProps, Props } from "./getDataTypes/types"
import styled from 'react-emotion'

const getData = (Component: React.ComponentType) => {
  return connect<null, IMapProps, {}>(
    null,
    { selectedSymbol }
  )(
    class extends React.Component<Props> {
      constructor(props: any) {
        super(props);
      }

      public componentDidMount() {
        const { symbol } = this.props.match.params;
        this.props.selectedSymbol(symbol);
      }

      public render() {
        return <ComponentContainer><Component /></ComponentContainer>;
      }
    }
  );
};



export const ComponentContainer = styled('div')`
  
  @media (min-width: 800px) {
    margin: 10vh 25vh 10vh 25vh;
  }
  @media (max-width: 800px) {
    margin: 3vh 10vh 3vh 10vh;
  }
`



export default getData;