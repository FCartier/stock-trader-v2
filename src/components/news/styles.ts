import styled from 'react-emotion';

export const List = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    padding: 1rem 0;
  }
`

export const Header = styled('p')`
  margin: 0px;
  padding: 0px;
  a {
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }
`
export const Footer = styled('p')`
  padding-bottom: 4px;
  padding-top: 4px;
  margin: 0px;
  font-size: 9px;
`

export const Container = styled('div')`
  @media (max-width: 760px) {
    margin-top: 4rem;
  }
`