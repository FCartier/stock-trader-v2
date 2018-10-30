import React from "react";

import { Gradient } from "./globalStyles";
import Global from "./globalStyles";
import { ThemeProvider } from "emotion-theming";
import { connect } from "react-redux";
import { GlobalState } from "./StoreTypes";

const Style: React.SFC<any> = (props) => (
  <Global>
    <ThemeProvider theme={props.theme}>
      <Gradient>{props.children}</Gradient>
    </ThemeProvider>
  </Global>
);

export const mapStateToProps = ({ theme }: GlobalState) => ({
  theme
});

export default connect(
  mapStateToProps,
  null
)(Style);