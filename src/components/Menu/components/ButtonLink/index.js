import styled from 'styled-components'

export const ButtonLink = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 12px 32px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    text-decoration: none;     
    transition: opacity .3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus {
    opacity: .5;
    }

    @media (max-width: 800px) {        
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
    }
`