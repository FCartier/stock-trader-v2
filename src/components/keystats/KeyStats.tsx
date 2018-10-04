import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";

interface IKeyStatsProps {
    keystats: {
        close: number;
        low: number;
        high: number;
        open: number;
        latestVolume: number;
        week52High: number;
        week52Low: number;
        avgTotalVolume: number;
    };
  }

const KeyStats: React.SFC<IKeyStatsProps> = ({keystats}) => {
  return keystats.high ? (
    <div>
        <div className="keystats">
          <SectionHeader title="KEY STATS" />
          <div className="keystats-row">
            <div className="keystats-column">
              <ul className="keystats-list">
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
              </ul>
            </div>
            <div className="keystats-column">
              <ul className="keystats-list">
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
              </ul>
            </div>
          </div>
        </div>
    </div>
  ) : null
};

export default KeyStats;