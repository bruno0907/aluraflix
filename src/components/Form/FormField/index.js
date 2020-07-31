import React from 'react';
import Proptypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './styles'

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

export default FormField;
