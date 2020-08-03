import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'

import useForm from '../../../hooks/useForm';

import Form from '../../../components/Form'
import FormField from '../../../components/Form/components/FormField'
import ButtonArea from '../../../components/Form/components/ButtonArea'

import videosRepository from '../../../repositories/videos';
import categoryRepository from '../../../repositories/categorias';

function CadastroVideo() {
    const history = useHistory()
    const { handleChange, values, clearForm } = useForm({});
    const [ categorias, setCategorias ] = useState([]);
    
    const categoryTitles = categorias.map(({ titulo }) => titulo);

    useEffect(() => {
        categoryRepository.getAll()
            .then((categorias) => {
                setCategorias(categorias)
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();    

        const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
        });

        videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id
        }).then(() => {
            console.log('Cadastro com sucesso!')

            clearForm();
            history.push('/')
        })
      }  

    return (

        <PageDefault>
            <Form onSubmit={handleSubmit}>
                <h1>Cadastro de Vídeo</h1>

                <FormField
                    label="Título do Vídeo"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />                               
                <FormField
                    label="URL do Vídeo"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />                
                <FormField
                    label="Categoria do Vídeo"
                    type="datalist"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}                    
                    suggestions={categoryTitles}
                />
                <ButtonArea>
                    <Button type="submit">Salvar</Button>
                    <Button type="reset" secondary>Limpar</Button>                      
                </ButtonArea>
                
            </Form>

            <Link to="/cadastro/categoria">Cadastrar Categoria</Link>                  

        </PageDefault>
    )
}

export default CadastroVideo