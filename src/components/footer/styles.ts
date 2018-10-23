import styled from 'react-emotion';

export const MarketFoot = styled('ul')`
    display: flex;
    font-size: 10px;
    list-style-type: none;
    align-items: stretch;
    justify-content: space-around;
    background-image: linear-gradient(to bottom right, ${props => props.theme.marketFooterTop}, ${props => props.theme.marketFooterBottom}); 
    overflow: hidden;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 5vh;
    padding-top: 1vh;
    color: ${props => props.theme.textColor};
`

export const MarketItem = styled('li');
