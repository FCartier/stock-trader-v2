import React from "react";
import { Chart } from "./Chart";
import { formatChartData } from "./utils/formatChartData";
import ChartFilter from "./ChartFilter"

const ChartContainer = (props) => {
  
  const { chart } = props;
  console.log(chart)
  console.log(formatChartData(chart))
  return chart.length ? (
    <div>
        <div className="chartContainer">
          <ChartFilter/>
          <Chart data={formatChartData(chart)} />
        </div>
    </div>
  ) : null
};

export default ChartContainer;
