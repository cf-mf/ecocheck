import Footer from '../components/Footer';
import PlansSection from '../components/PlansSection';

export function Home() {
    return (
        <section className="page">
            <div className="banner-homepage">
                <h1>Economia. Ecologia. Ecocheck.</h1>
                <p>Controle seu consumo de água e energia<br/> de forma <span>simples</span>, inteligente e <span>acessível</span>.</p>
                <button><a href="#planos">Conheça mais</a></button>
            </div>
            <div id="sobre" className="about-homepage">
                <h2>O que é o EcoCheck?</h2>
                <p>O EcoCheck é um dispositivo inteligente que mede o consumo de água e energia da sua casa e envia essas informações para um painel online.</p>
                <h2>Como funciona?</h2>
                <p>✅ Instale os sensores<br/>✅ Conecte ao sistema<br/>✅ Acesse seu painel online<br/>✅ Economize!</p>
            </div>
            <div id="planos" className="planos-homepage">
                <PlansSection />
            </div>
            <Footer />
        </section>
    )
}