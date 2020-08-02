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
    margin: 22px 0;
    margin-left: ${
        props => props.secondary ? "40px" : ""
    };
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    transition: opacity .3s;
    text-decoration: none;

    &:hover,
    &:focus{
        opacity: .8;
    }
`;

export default Button;
