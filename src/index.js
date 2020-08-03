import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'
import EditarCategoria from './pages/editar/Categoria'

import Pagina404 from './pages/404'

ReactDOM.render(

  <BrowserRouter>
    <Switch>

      <Route path="/" exact component={Home}/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route path="/editar/categoria/:id" component={EditarCategoria}/>
      <Route component={Pagina404}/>

    </Switch>    
  </BrowserRouter>,
  
  document.getElementById('root')
);
