import styled from 'react-emotion'

export const CategoryHeader = styled('div')`
  color: ${props => props.theme.headerColor};
  border-bottom: 2px solid ${props => props.theme.headerColor};
  h3 {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`