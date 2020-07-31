import React from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';

function FormField({
  label, type, name, value, onChange, 
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tagType = isTextArea ? 'textarea' : 'input';  

  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>                
        <Input
          as={tagType}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  as: 'input',
};

FormField.prototype = {
  label: Proptypes.string.isRequired,
  type: Proptypes.number,
  name: Proptypes.string.isRequired,
  value: Proptypes.string,
  onChange: Proptypes.func.isRequired,
};

const FormFieldWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  position: relative;
  textarea{
    min-height: 150px;
    resize: vertical;
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
  border-radius: 4px;
  
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

export default FormField;
