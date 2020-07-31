import styled from 'styled-components';

const ButtonLink = styled.button`
    background: var(--primary);
    color: var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 12px 32px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    text-decoration: none;     
    transition: opacity .3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover,
    &:focus {
    opacity: .8;
    }

    @media (max-width: 800px) {        
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0;
        border: 0;
    }
`

export default ButtonLink;
