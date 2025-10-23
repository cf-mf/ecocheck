// src/pages/Cadastro/Cadastro.jsx

import { Link } from 'react-router-dom';
import './Cadastro.css';
import logo from '../../assets/logo.png';

export function Cadastro() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui você trata os dados do formulário
    console.log("Formulário enviado!");
  };

  return (
    <section className="cadastro-page">
        <div className="pagina-container">
            {/* Cabeçalho com botão de voltar e logo */}
            <header className="cabecalho-cadastro">
                <Link to="/" className="botao-voltar" style={{textDecoration: "none"}}>← Voltar</Link>
                <img src={logo} alt="EcoCheck Logo" className="logo" />
            </header>

            {/* Formulário de checkout */}
            <form className="formulario-compra" onSubmit={handleSubmit}>
                {/* Linha: E-mail e Senha */}
                <div className="linha-formulario">
                <div className="campo-formulario">
                    <label>E-mail *</label>
                    <input type="email" required />
                </div>
                <div className="campo-formulario">
                    <label>Senha *</label>
                    <input type="password" required />
                </div>
                </div>

                {/* Linha: Nome e Sobrenome */}
                <div className="linha-formulario">
                <div className="campo-formulario">
                    <label>Nome *</label>
                    <input type="text" required />
                </div>
                <div className="campo-formulario">
                    <label>Sobrenome *</label>
                    <input type="text" required />
                </div>
                </div>

                {/* Linha: CEP, UF e Cidade */}
                <div className="linha-formulario">
                <div className="campo-formulario pequeno">
                    <label>CEP *</label>
                    <input type="text" required />
                </div>
                <div className="campo-formulario pequeno">
                    <label>UF *</label>
                    <select required>
                    <option value="">SP</option>
                    <option>RJ</option>
                    <option>DF</option>
                    </select>
                </div>
                <div className="campo-formulario">
                    <label>Cidade *</label>
                    <input type="text" required />
                </div>
                </div>

                {/* Linha: Endereço e Complemento */}
                <div className="linha-formulario">
                <div className="campo-formulario">
                    <label>Endereço *</label>
                    <input type="text" required />
                </div>
                <div className="campo-formulario">
                    <label>Complemento</label>
                    <input type="text" required />
                </div>
                </div>

                {/* Linha: Método de pagamento */}
                <div className="linha-formulario">
                <div className="campo-formulario completo">
                    <label>Método de Pagamento *</label>
                    <div className="metodo-pagamento">
                    <input type="radio" name="pagamento" defaultChecked />
                    <label>Pix</label>
                    </div>
                </div>
                </div>

                {/* Resumo da compra */}
                <div className="resumo-compra">
                <h3>Compra</h3>
                <div className="item-compra">
                    <img src={logo} alt="EcoStart" />
                    <div className="info-item">
                    <p>EcoStart</p>
                    <span>R$ 12,99</span>
                    <small>-R$3,00 Cashback</small>
                    </div>
                </div>
                <div className="total-compra">
                    <p>Total</p>
                    <span>R$ 9,99</span>
                </div>
                </div>

                {/* Botão de finalizar */}
                <button type="submit" className="botao-finalizar">Finalizar compra</button>

                {/* Texto de segurança */}
                <p className="texto-seguro">Esta é uma compra segura e encriptada.</p>
            </form>
        </div>
    </section>
  );
}
