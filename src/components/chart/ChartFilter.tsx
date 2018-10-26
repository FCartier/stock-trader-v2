import * as React from "react";
import { connect } from "react-redux";
import { chartFilter } from "./chartActions";
import { Filter } from "./styles"

interface IChartFilter {
   chartFilter: (input: string, event: any) => void,
   input: string
}

interface IState {
    search: {
      symbol: string
    }
}

export class ChartFilter extends React.Component<IChartFilter> {
  constructor(props: any) {
    super(props)
  }

  public componendDidMount() {
    console.log(this.props)
  }
  public filter = (event: any) => {
    this.props.chartFilter(this.props.input, event.target.value);
  };

  public render() {
    return (
      <Filter>
        <button onClick={this.filter} value={"1d"}>1d</button>
        <button onClick={this.filter} value={"1m"}>1m</button>
        <button onClick={this.filter} value={"6m"}>6m</button>
        <button onClick={this.filter} value={"1y"}>1y</button>
        <button onClick={this.filter} value={"5y"}>5y</button>
      </Filter>
    );
  }
}

export default connect(
  (state : IState) => ({
    input: state.search.symbol
  }),
  { chartFilter }
)(ChartFilter);
