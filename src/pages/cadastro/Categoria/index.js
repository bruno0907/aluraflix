import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

import Form from '../../../components/Form'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
      // O [chave] entre chaves indica ao javascript que o valor que chave
      // receberá será dinâmico
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([...categorias, values]);
    setValues(initialValues);
  }

  useEffect(() => {
    const URL = 'http://localhost:3333/categorias'

    fetch(URL).then(async(res) => {
      const data = await res.json();
      setCategorias([
        ...data,
      ])
    })
  },[]);

  return (

    <PageDefault>

      <Form onSubmit={handleSubmit}>
        <h1>Cadastrar Categoria</h1>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}    
        />

        <FormField
          label="Descrição da Categoria"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}     
        />


        <Button type="submit">Cadastrar</Button>
      </Form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria}${index}`}>
            {categoria.nome}
            {' '}
            |
            {' '}
            {categoria.descricao}
            {' '}
            -
            {' '}
            {categoria.cor}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
