import News from "./News";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

import { selectNewsState } from "./selectors"
import { selectNewsStatus } from "./selectors"

export const mapStateToProps = (state: GlobalState) => ({
  news: selectNewsState(state),
  status: selectNewsStatus(state)
});

export default connect(
  mapStateToProps,
  null
)(News);
