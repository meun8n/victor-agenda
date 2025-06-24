import React from "react";
import "./Agendamento.css"; // Se estiver usando um CSS externo

const Agendamento = () => {
  return (
    <div className="container-agendamento">
      <h1>Agendamento</h1>
      <p>Selecione uma data e horário:</p>
      {/* Exemplo visual: */}
      <input type="date" />
      <input type="time" />
      <button>Agendar</button>
    </div>
  );
};

export default Agendamento;
