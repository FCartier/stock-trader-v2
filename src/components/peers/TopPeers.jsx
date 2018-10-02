import React from "react";

import { SectionHeader } from "../reusables/SectionHeader"
import  NoData  from "../reusables/NoData";

const TopPeers = ({toppeers}) => {
  return (
    <div>
      {toppeers && (
        <div>
          <SectionHeader title="TOP PEERS"/>
          <div>
            <ul className="top-peers-list">
              {toppeers.length 
              ? (toppeers.map((peer, index) => {
                return (
                  <li className="top-peers-element" key={index}>
                    {peer}
                  </li>
                );
              }))
              : <NoData componentName="top peers"/>}
              
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};


export default TopPeers;
