import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

import useForm from '../../../hooks/useForm'

import Form from '../../../components/Form'
import FormField from '../../../components/Form/FormField';
import FormButton from '../../../components/Form/FormButton';

import URL_BACKEND from '../../../config';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues) // Custom Hook
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = URL_BACKEND || 'http://localhost:3333/categorias'

    fetch(URL).then(async(res) => {
      const data = await res.json();
      setCategorias([
        ...data,
      ])
    })
  },[]);  

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([...categorias, values]);
    clearForm();
  }  

  return (

    <PageDefault>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastrar Categoria</h1>

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Link da Categoria"
          type="text"
          name="link"
          value={values.link}
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
        <FormField
          label="Videos da Categoria"
          type="text"
          name="videos"
          value={values.videos}
          onChange={handleChange}     
        />
        <FormButton type="submit">Cadastrar</FormButton>
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
            {categoria.titulo}
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
