// Custom Hook
import { useState } from 'react';

function useForm(initialValues){  
    const [values, setValues] = useState(initialValues);
  
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
        // O [chave] entre chaves indica ao javascript que o valor que chave
        // receberá será dinâmico
      });
    };
  
    function handleChange(e) {
      setValue(
        e.target.getAttribute('name'),
        e.target.value,
      );
    };
  
    function clearForm(){
      setValues(initialValues);    
    };
  
    return {
      values,
      handleChange,
      clearForm
    };
  }

  export default useForm;
