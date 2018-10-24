import Price from "./Price";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

export const mapStateToProps = ({ price, keystats: { keystats } }: GlobalState) => ({
  price,
  keystats
});

export default connect(
  mapStateToProps,
  null
)(Price);
