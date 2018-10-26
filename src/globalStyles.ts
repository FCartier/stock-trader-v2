/* tslint:disable */
import * as React from "react";
import { injectGlobal }  from "react-emotion";
import styled from "react-emotion";

class Global extends React.Component {

  public render() {
    injectGlobal`
      @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      body {
        min-height: 100%;
        margin: 0;
        font-family: 'Lato'; 
        display: flex;
        flex-direction: column;
      };
      html & body {
        height: 100%;
        width: 100%;
        margin: 0;
      };
    `;
    return React.Children.only(this.props.children);
  }
}


export const Gradient = styled('div')`
  background-image: linear-gradient(to bottom right,
     ${props => props.theme.backgroundColorTop},
     ${props => props.theme.backgroundColorBottom}); 
  min-height: 100vh;
  flex: 1;
  color: ${props => props.theme.textColor};
`

export const Logo = styled('img')`
  width: 10em;
  height: auto;
`

export const ThemeChangeButton = styled('button')`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  color: grey;
`
export default Global;