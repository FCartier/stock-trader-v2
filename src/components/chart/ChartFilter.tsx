import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { chartFilter } from "./chartActions";

interface IChartFilter {
   chartFilter: (input: string, event: any) => void,
   input: string
}

interface IState {
  input: string;
}

class ChartFilter extends React.Component<IChartFilter> {
  public filter = (event: any) => {
    this.props.chartFilter(this.props.input, event.target.value);
  };

  public render() {
    return (
      <div className="chart-filter">
        <button onClick={this.filter} value={"1d"}>1d</button>
        <button onClick={this.filter} value={"1m"}>1m</button>
        <button onClick={this.filter} value={"6m"}>6m</button>
        <button onClick={this.filter} value={"1y"}>1y</button>
        <button onClick={this.filter} value={"5y"}>5y</button>
      </div>
    );
  }
}

export default connect(
  (state : IState) => ({
    input: state.input
  }),
  { chartFilter }
)(ChartFilter);
