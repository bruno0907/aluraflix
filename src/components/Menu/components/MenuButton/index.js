import styled from 'styled-components';

const MenuButton = styled.button`
    color: var(--white);
    background: var(--primary);
    border-radius: var(--defaultRadius);
    padding: 16px 22px;
    margin: 22px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    transition: opacity .3s;
    text-decoration: none;

    &:hover,
    &:focus{
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

`;

export default MenuButton;
