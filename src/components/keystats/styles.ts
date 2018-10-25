import styled from 'react-emotion'

export const List = styled('ul')`
  list-style-type: none;
  padding-left: 1em;
  padding-right: 1em;
  li  {
    border-bottom: 2px solid grey;
    p  {
      display: inline-block;
      width: 49%;
    }
    h5 {
      display: inline-block;
      text-align: right;
      padding: 0px;
      margin: 0px;
      width: 49%;
    }
  }
`

export const Row = styled('div')`
  @media (max-width: 1040px) {
    display: block;
    margin-bottom: 30px;
  }
  @media (min-width: 1040px) {
    display: flex;
  }
  @media (max-width: 760px) {
    padding-right: 1rem
  }
`

export const Column = styled('div')`
  flex: 50%
`
