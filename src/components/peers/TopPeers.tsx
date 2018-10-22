import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import { List, Item } from "./styles";

interface ITopPeersProps {
  peers?: string[];
}

const TopPeers: React.SFC<ITopPeersProps> = ({ peers }) => {
  return peers.length ? (
    <div>
      <SectionHeader title="TOP PEERS" />
      <div>
        <List>
          {peers.slice(0, 6).map((peer: string, index: number) => {
            return <Item key={index}>{peer}</Item>;
          })}
        </List>
      </div>
    </div>
  ) : null;
};

export default TopPeers;
