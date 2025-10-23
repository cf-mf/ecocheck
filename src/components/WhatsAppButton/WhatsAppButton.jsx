// src/components/WhatsAppButton/WhatsAppButton.jsx

import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phone = "5511912345678";
  const message = "Olá! Quero saber mais sobre o EcoCheck.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


  return (
    <>
      <a
        href={whatsappLink}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src\assets\whatsapp.png" alt="WhatsApp" />
        <span className="tooltip">Fale conosco pelo WhatsApp</span>
      </a>
    </>
  );
}
