// src/components/Header/Header.jsx

import './Header.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export default function Header({children}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="Logo EcoCheck" />
                    <h2>EcoCheck</h2>
                </div>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
                    ☰
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    {children}
                </nav>
            </div>
        </header>
    );
}
