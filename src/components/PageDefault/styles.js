import styled, { css } from 'styled-components'

export const Main = styled.main`
    background: var(--black);
    color: var(--white);
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 50px 5% 25px 5%;

    ${({ paddingAll }) => css`
        padding: ${paddingAll}
    `}
` 