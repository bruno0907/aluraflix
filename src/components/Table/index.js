import styled from 'styled-components';

export const Table = styled.table`
    margin-top: 22px;
    margin-bottom: 34px;
    width: 100%;
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

    > span {
        text-align: left;
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

export const Action = styled.button`
    width: 110px;
    height: 44px;
    color: var(--white);
    background: var(--primary);
    border-radius: var(--defaultRadius);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    transition: opacity .3s;
    text-decoration: none;
    text-align: center;    

    &:hover,
    &:focus{
        opacity: .8;
    }
` 