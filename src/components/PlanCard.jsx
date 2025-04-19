function PlanCard({ title, features }) {
    return (
      <div className="plan-card">
        <h3>{title}</h3>
        <ul>
          {features.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
        <button>Peça um orçamento</button>
      </div>
    );
  }
  
  export default PlanCard;
  