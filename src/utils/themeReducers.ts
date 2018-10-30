import { Reducer } from "redux";
import { THEME_CHANGED } from "./ThemeChange";
import { darkTheme } from "../themes"

export const theme: Reducer = (state = darkTheme, action) => {
    switch (action.type) {
      case THEME_CHANGED:
        return action.payload;
      default: 
        return state
    }
  };
  