import Market from "./MarketFooter";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

export const mapStateToProps = ({ market: { market, status } }: GlobalState) => ({
  market,
  status
});

export default connect(
  mapStateToProps,
  null
)(Market);
