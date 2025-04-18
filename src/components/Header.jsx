// components/Header.jsx

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='header'>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="Logo EcoCheck" />  
                    <h1>EcoCheck</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/">Sobre</Link></li>
                        <li><Link to="/">Planos</Link></li>
                        <li><Link to="/">Entrar</Link></li>
                        <li><Link to="/"  className='button'>Começar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}