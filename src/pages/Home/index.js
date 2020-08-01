import React, { useState, useEffect } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categorias';

function Home() {  
  const [ categorias, setCategorias] = useState([])

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setCategorias([...categoriasComVideos,])
      })
      .catch((e) => {console.log(e.message)});

  }, [])  
  console.log(categorias)
  return (
      <PageDefault paddingAll={0}>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        {categorias.length > 0 && (

          categorias.map((categoria, index) => {
            if(index === 0){
              return (
                <div key={Math.random()}>            
                  <BannerMain
                    key={Math.random()}
                    videoTitle={categorias[0].titulo}
                    url={categorias[0].videos[0].url}
                    videoDescription={categorias[0].videos[0].titulo}
                  />
                  <Carousel
                    key={Math.random()}
                    ignoreFirstVideo
                    category={categoria}
                  />
            
                </div>
              )
            }

            return (
              <Carousel
                key={Math.random()}
                category={categoria}
              />
            )
          })

        )}

      </PageDefault>
    )
  
}

export default Home;
