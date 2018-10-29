import KeyStats from "./KeyStats";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

export const mapStateToProps = ({ keystats: { keystats, status } }: GlobalState) => ({
  keystats,
  status
});

export default connect(
  mapStateToProps,
  null
)(KeyStats);
