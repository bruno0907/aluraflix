import React from 'react';

import { Link } from 'react-router-dom';

import NavBar from './styles';

import logo from '../../assets/logo.png';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button'

export default function Menu() {
  return (
    <NavBar>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo vídeo</Button>
    </NavBar>
  );
}
