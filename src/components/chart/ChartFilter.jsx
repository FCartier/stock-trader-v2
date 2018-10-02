import React from "react";
import { connect } from "react-redux";
import { chartFilter } from "./chartActions";

class ChartFilter extends React.Component {
  filter = event => {
    this.props.chartFilter(this.props.input, event.target.value);
  };

  render() {
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
  state => ({
    input: state.input
  }),
  { chartFilter }
)(ChartFilter);
