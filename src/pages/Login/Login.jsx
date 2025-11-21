import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Login enviado!");
      setLoading(false);
    }, 1200);
  };

  return (
    <section className='pagina-login'>
      
      {/* Cabeçalho original, mantido sem alterações */}
      <header className="cabecalho">
        <div className="logo-container">
          <img src={logo} alt="EcoCheck Logo" className="logo-imagem" />
          <span className="nome-marca">EcoCheck</span>
        </div>

        <nav className="menu-navegacao">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/#planos">Planos</Link>
          <Link to="/login" className="botao-entrar">Entrar</Link>
          <Link to="/cadastro">Começar</Link>
        </nav>
      </header>

      {/* Área principal modernizada */}
      <main className="login-main">
        <div className="login-card">
          <h2 className="login-title">Entrar</h2>

          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              required
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p className="login-footer-text">
            Não tem uma conta? <Link to="/cadastro">Criar conta</Link>
          </p>
        </div>
      </main>
    </section>
  );
}
