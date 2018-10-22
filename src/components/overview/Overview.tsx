import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import NoData from "../reusables/NoData";

export interface IOverviewProps {
  overview?: {
    companyName: string;
    website: string;
    description: string;
  };
}

const Overview: React.SFC<IOverviewProps> = ({ overview }) => {
  return (
    <div>
      <div className="overview">
        <SectionHeader title="COMPANY OVERVIEW" />
        <div className="overview-content">
          {!(typeof overview === "undefined" || overview.companyName === "") ? (
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
  );
};

export default Overview;
