import styled from 'react-emotion'

const topFooter = '#01255c'
const bottomFooter = '#002050' 

export const MarketFoot = styled('ul')`
    display: flex;
    font-size: 10px;
    list-style-type: none;
    align-items: stretch;
    justify-content: space-between;
    max-width: 100%;
    margin-bottom: 1rem;
    background-image: linear-gradient(to bottom right, ${topFooter}, ${bottomFooter}); 
    overflow: hidden;
`
