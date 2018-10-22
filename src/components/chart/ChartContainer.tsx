import * as React from "react";
import { Chart } from "./Chart";
import { formatChartData } from "./utils/formatChartData";
import ChartFilter from "./ChartFilter";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";
import { Container } from "./styles";
import NoData from "../reusables/NoData";

interface IChartContainerProps {
  chart?: [];
}

export const ChartContainer: React.SFC<IChartContainerProps> = props => {
  const { chart } = props;

  return (
    <div>
      <Container>
        {chart.length ? (
          <>
            <ChartFilter />
            <Chart data={formatChartData(chart)} />
          </>
        ) : (
          <NoData componentName="chart" />
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  chart: state.chart
});

export default connect(
  mapStateToProps,
  null
)(ChartContainer);
