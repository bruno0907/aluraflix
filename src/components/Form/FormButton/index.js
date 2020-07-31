import styled from 'styled-components';

const FormButton = styled.button`
    width: 100%;
    color: var(--white);
    background: var(--primary);
    border-radius: var(--defatultRadius);
    padding: 16px 22px;
    margin: 22px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    transition: opacity .3s;

    &:hover,
    &:focus{
        opacity: .8;
    }

`;

export default FormButton;
