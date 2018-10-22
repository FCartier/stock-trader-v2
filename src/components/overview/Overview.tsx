import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import { fetchStatus } from "../reusables/fetchStatus";
import NoData from "../reusables/NoData";

export interface IOverviewProps {
  overview?: {
    status: fetchStatus;
    companyName: string;
    website: string;
    description: string;
  };
}

const Overview: React.SFC<IOverviewProps> = ({ overview }) => {
  return overview.status !== fetchStatus.pending ? (
    <div>
      <div className="overview">
        <SectionHeader title="COMPANY OVERVIEW" />
        <div className="overview-content">
          {overview.status === fetchStatus.success ? (
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
