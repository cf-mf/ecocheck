// src/components/Footer/Footer.jsx

import './Footer.css';
import { HashLink } from 'react-router-hash-link';

export default function Footer(){
    return (
        <footer className="footer">
    <div className="footer-left">
        <h2 className="logo">EcoCheck</h2>
        <button style={{ all: 'unset' }}>
            <HashLink className='top-button' to="/#banner-homepage">Voltar ao topo</HashLink>
        </button>
    </div>

    <div className="footer-right">
        <p><strong>Contate-nos</strong></p>
        <p>ecocheck@gmail.com</p>
        <p><a href="https://instagram.com" target="_blank">Instagram</a></p>
    </div>

    <div className="footer-bottom">
        © {new Date().getFullYear()} EcoCheck — Todos os direitos reservados.
    </div>
</footer>

    );
}