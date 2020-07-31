import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  position: relative;
  textarea{
    min-height: 100px;
    resize: none;
    padding-top: 21px;
    padding-left: 19px;
  }
  input[type="color"]{
    padding-left: 55px;
    padding: 4px 16px 4px 55px;
  }
`

const Label = styled.label``;
Label.Text = styled.span`
  color: var(--lighterGrey);
  position: absolute;
  top: 20px;
  left: 16px;
  font-size: 16px;
  transition: all .1s;
` ;

const Input = styled.input`
  width: 100%;
  height: 55px;
  padding: 16px 16px 4px;
  background: var(--lighterBlack);
  color: var(--white);
  font-size: 16px;
  border: 0;
  border-top: solid 3px transparent;  
  border-bottom: solid 3px var(--blackLighter);  
  border-radius: var(--defaultRadius);
  
  &:focus{
    filter: brightness(1.2);
    border-bottom: solid 3px var(--primary);
  }

  &:focus:not([type="color"]) + span{
    transform: scale(.7) translate(-30px, -22px);        
  }

  ${({ hasValue }) => hasValue && css`
      &:not([type="color"]) + span{
        transform: scale(.7) translate(-30px, -22px);      
      }
  `}

`

export { FormFieldWrapper, Label, Input };
