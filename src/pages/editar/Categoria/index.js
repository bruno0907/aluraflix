import React, { useState, useEffect } from 'react';
import { ArrowLeft }  from 'react-feather';

import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

import useForm from '../../../hooks/useForm'

import Form from '../../../components/Form'
import FormField from '../../../components/Form/components/FormField';
import ButtonArea from '../../../components/Form/components/ButtonArea';

import Button from '../../../components/Button';

import categoryRepository from '../../../repositories/categorias';



function EditarCategoria(route) {  
  const history = useHistory();
  const id = route.match.params.id


  const [ titulo, setTitulo ] = useState('')
  const [ link, setLink ] = useState('')
  const [ cor, setCor ] = useState('')
  const [ descricao, setDescricao ] = useState('')

  useEffect(() => {
  categoryRepository.getCategory(id)
    .then((categoria) => {      
  
      setTitulo(categoria.titulo || '')
      setLink(categoria.link || '')
      setCor(categoria.cor || '')      
      
      categoria.link_extra ? 
      setDescricao(categoria.link_extra.text) :
      setDescricao('')
    
    })
  }, []);

  const { clearForm } = useForm() // Custom Hook  

  function handleSubmit(e) {
    e.preventDefault();

    categoryRepository.update(id, {
      titulo,
      link,
      cor,
      link_extra: {
        text: descricao,
        url: link
      }
    }).then(() => {
      alert("Category Updated!!!")
    }).catch((e) => {
      console.log(e)
    })

    clearForm();
    history.push('/cadastro/categoria');
  };

  return (

    <PageDefault>
      <Form onSubmit={handleSubmit}>
        <h1>Editar Categoria</h1>

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <FormField
          label="Link da Categoria"
          type="text"
          name="link"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <FormField
          label="Cor da Categoria"
          type="cor"
          name="cor"
          value={cor}
          onChange={e => setCor(e.target.value)}
        />
        <FormField
          label="Descrição da Categoria"
          type="text"
          name="descricao"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <ButtonArea>
          <Button type="submit" >Salvar</Button>
          <Button type="button" secondary>Limpar</Button>
        </ButtonArea>
      </Form>

      <Link to="/cadastro/categoria" style={{ display: 'flex', alignItems: 'center'}}>
          <ArrowLeft color="#FFFFFF" size={24} />
          <span style={{ marginLeft: '4px'}}>Voltar para cadastro</span>
      </Link>
      
    </PageDefault>
  );

  };
export default EditarCategoria;
