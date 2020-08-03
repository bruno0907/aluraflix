import styled, { css } from 'styled-components'

export const Main = styled.main`
    background: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 25px 5%;

    ${({ paddingAll }) => css`
        padding: ${paddingAll}
    `}
` 