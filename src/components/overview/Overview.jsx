import React from "react";
import { SectionHeader } from "../reusables/SectionHeader"

const Overview = ({overview}) => {
  return Object.keys(overview).length ? (
    <div>
        <div className="overview">
          <SectionHeader title="COMPANY OVERVIEW"/>
          <div className="overview-content">
            <h2>{overview.companyName}</h2>
            <p>{overview.website}</p>
            <p>{overview.description}</p>
          </div>
        </div>
    </div>
  ) : null
};

export default Overview;
