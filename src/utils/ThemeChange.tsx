import React from "react"
import { ThemeChangeButton } from "../globalStyles"
import { darkTheme, lightTheme } from "../themes"
import { connect } from "react-redux"

export const THEME_CHANGED = "THEME_CHANGED";
export type THEME_CHANGED = typeof THEME_CHANGED;

class ThemeChange extends React.Component<{themeChangeAction: (theme: any) => void}, {isDark: boolean, theme: any}> {
  constructor(props: any) {
      super(props)
      this.state = {
        isDark: true,
        theme: darkTheme
      };
  }

  public changeTheme() {
    const isDark = !this.state.isDark;
    
    this.setState({
      isDark,
      theme: isDark ? darkTheme : lightTheme
    });
    this.props.themeChangeAction(this.state.theme)
  }

  public render() {
      return (
        <ThemeChangeButton onClick={() => this.changeTheme()}>Change Theme</ThemeChangeButton>
      )
  }
}

const themeChangeAction = (theme: any) => ({
    type: THEME_CHANGED, 
    payload: theme
})

const connectedThemeChange = connect(null, { themeChangeAction })(ThemeChange)

export default connectedThemeChange