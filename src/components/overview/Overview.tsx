import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader"

export interface IOverviewProps {
  overview?: {
      companyName: string;
      website: string;
      description: string;
  };
}

const Overview: React.SFC<IOverviewProps> = ({overview}) => {
  return !(typeof overview === "undefined" || overview.companyName === "") ? (
    <div>
      <div className='overview'>
        <SectionHeader title="COMPANY OVERVIEW" />
        <div className='overview-content'>
          <h2>{overview.companyName}</h2>
          <p>{overview.website}</p>
          <p>{overview.description}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Overview;
