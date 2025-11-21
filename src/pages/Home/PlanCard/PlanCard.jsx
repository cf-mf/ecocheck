// src/pages/Home/PlanCard/PlanCard.jsx

import './PlanCard.css';
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
        <HashLink to="/cadastro" style={{all:'unset'}}><button>Peça um orçamento</button></HashLink>
      </div>
    );
  }
  
  export default PlanCard;
  