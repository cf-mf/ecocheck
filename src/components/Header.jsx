// components/Header.jsx

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return(
        <header className='header'>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="Logo EcoCheck" />  
                    <h2>EcoCheck</h2>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><HashLink to="/#sobre">Sobre</HashLink></li>
                        <li><HashLink smooth to="/#planos">Planos</HashLink></li>
                        <li><Link to="/login">Entrar</Link></li>
                        <li><Link to="/cadastro"  className='button'>Começar</Link></li>
                        <li><Link to="/dashboard">dash-teste</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}