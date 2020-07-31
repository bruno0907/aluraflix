import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';

import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {  
  const [ categorias, setCategorias] = useState([])

  useEffect(() => {
    const URL = 'http://localhost:3333/categorias'

    fetch(URL).then( async(res) => {
      const data = await res.json()

      setCategorias([...data,])
    })
  }, [])

  useEffect(() => {
    const URL = 'http://localhost:3333/categorias'

    fetch(URL).then(async(res) => {
      const data = await res.json();
      console.log(data)
      setCategorias([
        ...data,
      ])
    })
  },[]);


  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      {categorias.map((categoria, index) => (
        <Carousel
          key={index}
          ignoreFirstVideo
          category={categoria}
        />
      ))}

      {/* <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       */}

      <Footer />
    </div>
  );
}

export default Home;