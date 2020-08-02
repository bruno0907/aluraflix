import styled from 'styled-components';

export const Table = styled.table`
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    border: solid 2px var(--primary);
    border-radius: var(--defaultRadius);
    padding: 4px;
    background: var(--black);
    font-weight: 100;
    border-collapse: collapse;
    font-size: 14px;

    @media(max-width: 800px){
        display: none;
    }
`;

export const Header = styled.thead` 
    background: var(--primary);
    font-size: 16px;
    font-weight: bold;
`

export const Row = styled.tr`
    
    &:nth-child(odd){
            background: transparent;
        }
    &:nth-child(even){
            background: var(--lighterBlack);
        }
`

export const Body = styled.tbody`
`

export const Column = styled.td`
    padding: 8px;

`