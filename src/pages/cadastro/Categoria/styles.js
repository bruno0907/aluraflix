import styled from 'styled-components';

export const Table = styled.table`       
    width: 100%;
    border: solid 2px var(--primary);
    padding: 4px;
`;

export const Header = styled.thead`
    background: green;
`
Header.Row = styled.tr`
    height: 50px;
`
export const Body = styled.tbody`
    background: red;
    line-height: 250%;
`