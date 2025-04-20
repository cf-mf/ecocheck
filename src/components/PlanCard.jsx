import { HashLink } from 'react-router-hash-link';

function PlanCard({ title, features }) {
    return (
      <div className="plan-card">
        <h3>{title}</h3>
        <ul>
          {features.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
        <button><HashLink to="/cadastro" style={{all:'unset'}}>Peça um orçamento</HashLink></button>
      </div>
    );
  }
  
  export default PlanCard;
  