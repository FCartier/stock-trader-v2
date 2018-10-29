import * as React from "react";
import { SectionHeader } from "../reusables/SectionHeader";
import { List, Item } from "./styles";
import { fetchStatus } from "../reusables/fetchStatus";
import NoData, {renderCondition} from "../reusables/NoData";
import PeersState from "./types";

const TopPeers: React.SFC<PeersState> = ({ peers, status }) => {
  return status !== fetchStatus.pending ? (
    <div>
      <SectionHeader title="TOP PEERS" />
      <div>
        {status === fetchStatus.success ? (
          <div>
            {renderCondition(peers.length) ? (
              <List>
                {peers.slice(0, 6).map((peer: string, index: number) => {
                  return <Item key={index}>{peer}</Item>;
                })}
              </List>
            ) : (
              <NoData componentName="top peers" />
            )}
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
};

export default TopPeers;
