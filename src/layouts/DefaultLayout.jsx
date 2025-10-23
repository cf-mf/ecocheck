// layouts/DefaultLayout.jsx

import Header from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export function DefaultLayout() {
  return (
    <>
      <Header>
          <ul onClick={() => setMenuOpen(false)}>
              <li><Link to="/">Início</Link></li>
              <li><HashLink smooth to="/#sobre">Sobre</HashLink></li>
              <li><HashLink smooth to="/#planos">Planos</HashLink></li>
              <li><Link to="/login">Entrar</Link></li>
              <li><Link to="/cadastro" className='button'>Começar</Link></li>
          </ul>
      </Header>
      <Outlet />
    </>
  );
}
