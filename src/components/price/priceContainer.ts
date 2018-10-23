import Price from "./Price";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

const mapStateToProps = (state: GlobalState) => {
    return {
      price: state.price,
      keystats: state.keystats.keystats
    }
}

export default connect(
  mapStateToProps,
  null
)(Price);
