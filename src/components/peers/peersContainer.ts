import Peers from "./TopPeers";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

export const mapStateToProps = ({ peers: { peers, status } }: GlobalState) => ({
  peers,
  status
});

export default connect(
  mapStateToProps,
  null
)(Peers);
