import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import { Row, Column, List } from "./styles";
import { fetchStatus } from "../reusables/fetchStatus";
import NoData from "../reusables/NoData";

interface IKeyStatsProps {
  keystats?: {
    close: number;
    low: number;
    high: number;
    open: number;
    latestVolume: number;
    week52High: number;
    week52Low: number;
    avgTotalVolume: number;
  };
  status?: fetchStatus;
}

const KeyStats: React.SFC<IKeyStatsProps> = ({ keystats, status }) => {
  return status !== fetchStatus.pending ? (
    <div>
      <SectionHeader title="KEY STATS" />
      {status === fetchStatus.success ? (
        <Row>
          <Column>
            <List>
              <li>
                <p>Previous Close</p> <h5>{keystats.close}</h5>
              </li>
              <li>
                <p>Day Range</p>{" "}
                <h5>
                  {keystats.low}-{keystats.high}
                </h5>
              </li>
              <li>
                <p>Volume</p> <h5>{keystats.latestVolume}</h5>
              </li>
            </List>
          </Column>
          <Column>
            <List>
              <li>
                <p>Open </p> <h5>{keystats.open}</h5>
              </li>
              <li>
                <p>52 Week Range</p>{" "}
                <h5>
                  {keystats.week52Low}-{keystats.week52High}
                </h5>
              </li>
              <li>
                <p> Total Avg. Volume</p> <h5>{keystats.avgTotalVolume}</h5>
              </li>
            </List>
          </Column>
        </Row>
      ) : (
        <NoData componentName="key stats" />
      )}
    </div>
  ) : null;
};

export default KeyStats;
