import styled from 'styled-components';

const Button = styled.button`
    min-width: 180px;
    min-height: 54px;
    color: ${
        props => props.secondary ? "var(--black)" : "var(--white)"
    };
    background: ${
        props => props.secondary ? "var(--mediumGrey)" : "var(--primary)"
    };
    border-radius: var(--defaultRadius);
    padding: 16px 22px;
    margin-left: ${
        props => props.secondary ? "40px" : ""
    };
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    transition: opacity .3s;
    text-decoration: none;
    text-align: center;

    &:hover,
    &:focus{
        opacity: .8;
    }

    @media(max-width: 800px){
        margin: 8px 0;
        width: 100%;

    }
`;

export default Button;
