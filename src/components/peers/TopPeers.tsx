import * as React from "react";
<<<<<<< HEAD
import { SectionHeader } from "../reusables/SectionHeader.tsx";
import { List, Item } from "./styles"
=======
import { SectionHeader } from "../reusables/SectionHeader";
>>>>>>> master

interface ITopPeersItem {
    name: string;
}

interface ITopPeersProps {
    peers?: [];
}

const TopPeers: React.SFC<ITopPeersProps> = ({peers}) => {
  return peers.length ? (
    <div>
            <SectionHeader title="TOP PEERS"/>
            <div>
            <List>
                {peers.map((peer: ITopPeersItem, index: number) => {
                    return (
                        <Item key={index}>
                        {peer}
                        </Item>
                    );
                })}
            </List>
            </div>
        </div>
  ) : null;
};

export default TopPeers;