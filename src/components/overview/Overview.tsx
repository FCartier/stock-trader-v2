import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import { fetchStatus } from "../reusables/fetchStatus";
import NoData from "../reusables/NoData";

export interface IOverviewProps {
  overview?: {
    companyName: string;
    website: string;
    description: string;
  };
  status?: fetchStatus;
}

const Overview: React.SFC<IOverviewProps> = ({ overview, status }) => {
  return status !== fetchStatus.pending ? (
    <div>

      <div className="overview">
        <SectionHeader title="COMPANY OVERVIEW" />
        <div className="overview-content">
          {status === fetchStatus.success ? (
            <>
              <h2>{overview.companyName}</h2>
              <p>{overview.website}</p>
              <p>{overview.description}</p>
            </>
          ) : (
            <NoData componentName="overview" />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default Overview;
