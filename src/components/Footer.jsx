import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <footer class="footer">
            <div class="footer-left">
                <h2 className="logo">EcoCheck</h2>
                <button style={{all:'unset'}}><Link className='top-button' to="/">Voltar ao topo</Link></button>
            </div>
            <div class="footer-right">
                <p><strong>Contate-nos</strong></p>
                <p>ecocheck@gmail.com</p>
                <p><a href="https://instagram.com" target="_blank">Instagram</a></p>
            </div>
        </footer>
    );
}