import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

import useForm from '../../../hooks/useForm'

import Form from '../../../components/Form'
import FormField from '../../../components/Form/components/FormField';
import ButtonArea from '../../../components/Form/components/ButtonArea';

import Button from '../../../components/Button';

import { Table, Header, Column, Row, Body } from '../../../components/Table'

import categoryRepository from '../../../repositories/categorias';

// import { Table, Header, Body } from './styles'

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(initialValues) // Custom Hook
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoryRepository.getAll()
      .then((categorias) => {
        setCategorias([...categorias,])
      })
  }, [])

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
        <ButtonArea>
          <Button type="submit" >Salvar</Button>
          <Button type="button" secondary>Limpar</Button>
        </ButtonArea>
      </Form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <Table>
        <Header>
          <Row>
            <Column>Titulo</Column>
            <Column>Descrição</Column>
            <Column>Editar</Column>
            <Column>Remover</Column>   
          </Row>         
        </Header>
        <Body>
          {categorias.map((item) => (             
            <Row key={item.id}>
                <Column>{item.titulo}</Column>
                {
                    item.link_extra
                        ? <Column>{item.link_extra.text}</Column>
                        : <Column></Column>
                }
                <Column><Link to="/">Editar</Link></Column>
                <Column><Link to="/">Remover</Link></Column>
            </Row>            
          ))}
        </Body>
      </Table>
    </PageDefault>
  );
}

export default CadastroCategoria;
