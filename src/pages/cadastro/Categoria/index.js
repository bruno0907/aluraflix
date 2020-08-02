import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

import useForm from '../../../hooks/useForm'

import Form from '../../../components/Form'
import FormField from '../../../components/Form/components/FormField';
import ButtonArea from '../../../components/Form/components/ButtonArea';

import Button from '../../../components/Button';

import { Table, Header, Column, Row, Body, Action } from '../../../components/Table'

import categoryRepository from '../../../repositories/categorias';

// import { Table, Header, Body } from './styles'

function CadastroCategoria() {
  const history = useHistory();
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
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    categoryRepository.create({
      titulo: values.titulo,
      link: values.link,
      cor: values.cor,
      link_extra: {
        text: values.descricao,
        url: values.link
      }
    }).then(() => {
      setCategorias([...categorias, categorias])
      //history.push('/categorias')
    });

    clearForm();
    history.push('/');
  };

  function removeCategory(id){
    alert('Deseja mesmo remover a categoria?')
    categoryRepository.destroy(id)   
    
    setCategorias(categorias.filter( categoria => categoria.id !== id ))
  }

  // function updateCategory(id){
  //   categoryRepository.update(id, {
  //     titulo: values.titulo,
  //     link: values.link,
  //     cor: values.cor,
  //     link_extra: {
  //       text: values.descricao,
  //       url: values.link
  //     }
  //   }).then(() => {
  //     alert("Category Updated!!!")
  //   })
  // }

    
 


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
                <Column style={{ width: '30%'}}>{item.titulo}</Column>
                {
                    item.link_extra
                        ? <Column>{item.link_extra.text}</Column>
                        : <Column></Column>
                }
                <Column style={{ width: '130px'}}><Action onClick={() => history.push(`/categoria/update/${item.id}`)}>Editar</Action></Column>
                <Column style={{ width: '130px'}}><Action onClick={() => removeCategory(item.id)}>Remover</Action></Column>
            </Row>            
          ))}
        </Body>
      </Table>
    </PageDefault>
  );
}

export default CadastroCategoria;
