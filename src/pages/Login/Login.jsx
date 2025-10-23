// src/pages/Login/Login.jsx

import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';
import { HashLink } from 'react-router-hash-link';

export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login enviado!");
  };

  return (
    <section className='pagina-login'>
      {/* Cabeçalho com logo e menu */}
      <header className="cabecalho">
        <div className="logo-container">
          <img src={logo} alt="EcoCheck Logo" className="logo-imagem" />
          <span className="nome-marca">EcoCheck</span>
        </div>

        <nav className="menu-navegacao">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <HashLink to="/#planos">Planos</HashLink>
          <Link to="/login" className="botao-entrar">Entrar</Link>
          <Link to="/cadastro">Começar</Link>
        </nav>
      </header>

      {/* Conteúdo principal com formulário de login */}
      <main className="conteudo-principal">
        <div className="caixa-login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              required
            />

            <button type="submit"><HashLink to="/dashboard" style={{all:'unset'}}>Entrar</HashLink></button>
          </form>
        </div>
      </main>
    </section>
  );
}
