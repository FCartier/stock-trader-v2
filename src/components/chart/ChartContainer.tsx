import React from "react";
import { Chart } from "./Chart";
import { formatChartData } from "./utils/formatChartData";
import ChartFilter from "./ChartFilter.tsx"


interface IChartContainerProps {
  chart: []
}

export const ChartContainer: React.SFC<IChartContainerProps> = (props) => {
  
  const { chart } = props;

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
