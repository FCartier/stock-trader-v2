import * as React from "react";
import { Chart } from "./Chart";
import { formatChartData } from "./utils/formatChartData";
import ChartFilter from "./ChartFilter";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";
import { Container } from "./styles";
import { fetchStatus } from "../reusables/fetchStatus";
import NoData from "../reusables/NoData";


interface IChartContainerProps {
  chart?: [];
  status?: fetchStatus;
  theme?: {chartColor: string};
}

export const ChartContainer: React.SFC<IChartContainerProps> = ({
  chart,
  status, 
  theme
}) => {
  return status !== fetchStatus.pending ? (
    <div>
      {status === fetchStatus.success ? (
        <>
          <ChartFilter />
          <Container>
            <Chart data={formatChartData(chart)} theme={theme} />
          </Container>
        </>
      ) : (
        <NoData componentName="chart" />
      )}
    </div>
  ) : null;
};

export const mapStateToProps = ({ chart: { chart, status }, theme }: GlobalState) => ({
  chart,
  status, 
  theme
});

export default connect(
  mapStateToProps,
  null
)(ChartContainer);
