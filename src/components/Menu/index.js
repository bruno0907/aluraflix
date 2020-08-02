import React from 'react';

import { Link } from 'react-router-dom';

import NavBar from './styles';

import logo from '../../assets/logo.png';

import MenuButton from './components/MenuButton'

export default function Menu() {
  return (
    <NavBar>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>      
      <MenuButton as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </MenuButton>
    </NavBar>
  );
}
