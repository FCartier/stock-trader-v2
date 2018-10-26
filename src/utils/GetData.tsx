import React from "react";
import { selectedSymbol } from "../components/search/searchActions"
import { connect } from "react-redux"
import { IMapProps, Props } from "./getDataTypes/types"
import { Link } from "react-router-dom"
import { css } from "react-emotion"


const getData = (Component: any, Container?: React.ComponentType) => {
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
        return Container 
             ? <div>
                 <Link className={backButton} to={`/${symbol}`}>back</Link>
                 <Container>
                   <Component/>
                 </Container> 
               </div>
             : <Component symbol={symbol}/>;
      }
    }
  );
}; 


const backButton = css`
  margin: 20px;
  color: white;
`

export default getData;