import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    margin-top: 45px;
    color: var(--white);
    background: var(--primary);
    padding: 16px 22px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus{
        opacity: .8;
    }

`;

export default Button;
