import React from 'react';
import Proptypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './styles'

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tagType = isTextArea ? 'textarea' : 'input';  

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length)

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>                
        <Input
          as={tagType}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : 'on'}          
          hasValue={hasValue}
          onChange={onChange}

        />
        <Label.Text>{label}</Label.Text>

        { hasSuggestions && 
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option key={`suggestionFor_${fieldId}_option${suggestion}`} value={suggestion}>
                {suggestion}
              </option>
            ))}        
          </datalist>
        }

      </Label>

    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.prototype = {
  label: Proptypes.string.isRequired,
  type: Proptypes.number,
  name: Proptypes.string.isRequired,
  value: Proptypes.string,
  onChange: Proptypes.func.isRequired,
  suggestions: Proptypes.arrayOf(Proptypes.string),
};

export default FormField;
