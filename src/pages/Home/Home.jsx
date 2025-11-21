// src/pages/Home/Home.jsx

import "./Home.css";
import { HashLink } from "react-router-hash-link";
import Footer from "../../components/Footer/Footer";
import PlansSection from "./PlansSection/PlansSection";

export function Home() {
  return (
    <section className="page">
      <div id="banner-homepage" className="banner-homepage">
        <h1>Economia. Ecologia. Ecocheck.</h1>
        <p>
          Controle seu consumo de água e energia
          <br /> de forma <span>simples</span>, inteligente e{" "}
          <span>acessível</span>.
        </p>
        <HashLink to="#planos">
          <button>Conheça mais</button>
        </HashLink>
      </div>

      <div id="sobre" className="about-homepage">
        {/* Lado Esquerdo: Título e Descrição */}
        <div className="about-text-content">
          <h2 className="about-title">Como funciona?</h2>
          <p className="about-description">
            EcoCheck é um sistema inteligente que mede o consumo de água e
            energia da sua casa e envia essas informações para um painel online.
          </p>
        </div>
        
        {/* Lado Direito: Cards de Passos */}
        <div className="steps-cards-grid">
          <div className="step-card">
            <span className="step-icon">⚙️</span>
            <p className="step-description">Instale os sensores</p>
          </div>
          <div className="step-card">
            <span className="step-icon">☁️</span>
            <p className="step-description">Conecte ao sistema</p>
          </div>
          <div className="step-card">
            <span className="step-icon">🔒</span>
            <p className="step-description">Acesse seu dashboard</p>
          </div>
          <div className="step-card">
            <span className="step-icon">💸</span>
            <p className="step-description">Comece a economizar!</p>
          </div>
        </div>
      </div>

      <div id="planos" className="planos-homepage">
        <PlansSection />
      </div>
      <Footer />
    </section>
  );
}
