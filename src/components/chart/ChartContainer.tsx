import * as React from "react";
import { Chart } from "./Chart";
import { formatChartData } from "./utils/formatChartData";
import ChartFilter from "./ChartFilter";
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'
import { Container } from './styles'
import { Link } from "react-router-dom"

interface IChartContainerProps {
  chart?: []
}

export const ChartContainer: React.SFC<IChartContainerProps> = (props) => {
  
  const { chart } = props;

  return chart.length ? (
    <div>
        <Container>
          <Link to="../chart">Chart</Link>
          <ChartFilter/>
          <Chart data={formatChartData(chart)} />
        </Container>
    </div>
  ) : null
};

const mapStateToProps = (state: GlobalState) => ({
  chart: state.chart
})

export default connect(
    mapStateToProps,
    null
)(ChartContainer)
