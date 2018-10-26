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
}

export const ChartContainer: React.SFC<IChartContainerProps> = ({
  chart,
  status
}) => {
  return status !== fetchStatus.pending ? (
    <div>
      {status === fetchStatus.success ? (
        <>
          <ChartFilter />
          <Container>
            <Chart data={formatChartData(chart)} />
          </Container>
        </>
      ) : (
        <NoData componentName="chart" />
      )}
    </div>
  ) : null;
};

const mapStateToProps = ({ chart: { chart, status } }: GlobalState) => ({
  chart,
  status
});

export default connect(
  mapStateToProps,
  null
)(ChartContainer);
