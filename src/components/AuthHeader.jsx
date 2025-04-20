// components/AuthHeader.jsx

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function AuthHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="Logo EcoCheck" />
                    <h2>EcoCheck</h2>
                </div>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <ul onClick={() => setMenuOpen(false)}>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/login">Perfil</Link></li>
                        <li><HashLink to="/#planos">Planos</HashLink></li>
                        <li><Link to="/" className='button'>Sair</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
