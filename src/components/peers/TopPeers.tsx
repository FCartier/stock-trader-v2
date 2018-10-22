import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import { List, Item } from "./styles";
import NoData from "../reusables/NoData";

interface ITopPeersProps {
  peers?: string[];
}

const TopPeers: React.SFC<ITopPeersProps> = ({ peers }) => {
  return (
    <div>
      <SectionHeader title="TOP PEERS" />
      <div>
        {peers.length ? (
          <List>
            {peers.slice(0, 6).map((peer: string, index: number) => {
              return <Item key={index}>{peer}</Item>;
            })}
          </List>
        ) : (
          <NoData componentName="top peers" />
        )}
      </div>
    </div>
  );
};

export default TopPeers;
