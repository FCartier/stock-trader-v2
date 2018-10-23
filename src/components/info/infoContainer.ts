import StockInfo from "./StockInfo";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

const mapStateToProps = ({ keystats: { keystats } }: GlobalState) => ({
  keystats
});

export default connect(
  mapStateToProps,
  null
)(StockInfo);
