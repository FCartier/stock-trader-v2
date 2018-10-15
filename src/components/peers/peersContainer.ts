import Peers from "./TopPeers";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

const mapStateToProps = (state: GlobalState) => ({
  peers: state.peers
});

export default connect(
  mapStateToProps,
  null
)(Peers);