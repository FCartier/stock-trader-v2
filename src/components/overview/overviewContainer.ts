import Overview from "./Overview";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

const mapStateToProps = ({ overview: { overview, status } }: GlobalState) => ({
  overview,
  status
});

export default connect(
  mapStateToProps,
  null
)(Overview);
