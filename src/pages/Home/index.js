import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';

import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {  
  const [ categorias, setCategorias] = useState([])

  useEffect(() => {
    const URL = 'http://localhost:3333/categorias';

    fetch(URL).then(async(res) => {
      const data = await res.json();

      setCategorias([...data])
      
    })
  }, [])
  const bannerContent = categorias.map(content => content).slice(0, 1)

 

  return (
    <div>
      <Menu />
      
      {bannerContent.map((content, index) => (
        <BannerMain
          key={index}
          videoTitle={content.titulo}
          url={content.videos[0].url}
          videoDescription={content.videos[0].titulo}
        />
      ))}

      {categorias.map((categoria, index) => (
        <Carousel
          key={index}
          ignoreFirstVideo
          category={categoria}
        />
      ))}      

      <Footer />
    </div>
  );
}

export default Home;