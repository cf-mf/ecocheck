import PlanCard from './PlanCard';

function PlansSection() {
  return (
    <section className="plans-section">
      <h2>Planos Acessíveis e Completos!</h2>
      <div className="plans-container">
        <PlanCard
          title="EcoStart"
          features={[
            'Monitoramento básico',
            'Acesso com dados diários',
            'Histórico de 7 dias',
            '1 dispositivo vinculado',
          ]}
        />

        <PlanCard
          title="EcoSmart"
          features={[
            'Monitoração em tempo real',
            'Acesso com dados diários',
            'Histórico de 3 meses',
            'Até 3 dispositivos conectados',
          ]}
        />

        <PlanCard
          title="EcoHerói"
          features={[
            'Dashboards personalizados',
            'API dedicada',
            'Histórico ilimitado',
            'Dispositivos ilimitados',
          ]}
        />
      </div>
    </section>
  );
}

export default PlansSection;
