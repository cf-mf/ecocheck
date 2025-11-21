// src/layouts/AuthLayout.jsx

import AuthHeader from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export function AuthLayout() {
  return (
    <>
      <AuthHeader>
          <ul onClick={() => setMenuOpen(false)}>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><HashLink smooth to="/#planos">Planos</HashLink></li>
              <li><Link to="/login">Perfil</Link></li>
              <li><Link to="/" className='button'>Sair</Link></li>
          </ul>
      </AuthHeader>
      <Outlet />
    </>
  );
}