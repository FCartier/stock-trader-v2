import News from "./News";
import { connect } from "react-redux";
import { GlobalState } from "../../StoreTypes";

export const mapStateToProps = ({ news: { news, status } }: GlobalState) => ({
  news,
  status
});

export default connect(
  mapStateToProps,
  null
)(News);
