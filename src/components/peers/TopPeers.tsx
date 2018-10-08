import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import  NoData  from "../reusables/NoData";

interface ITopPeersItem {
    name: String;
}

interface ITopPeersProps {
    peers: [];
}

const TopPeers: React.SFC<ITopPeersProps> = ({peers}) => {
  return peers.length ? (
    <div>
            <SectionHeader title="TOP PEERS"/>
            <div>
            <ul className="top-peers-list">
                {peers.map((peer: ITopPeersItem, index: number) => {
                    return (
                        <li className="top-peers-element" key={index}>
                        {peer}
                        </li>
                    );
                })}
            </ul>
            </div>
        </div>
  ) : null;
};

export default TopPeers;