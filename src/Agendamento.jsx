// src/components/Agendamento.jsx
import React, { useState } from 'react';
import './Agendamento.css';

export default function Agendamento() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data && hora) {
      alert(`Agendado para ${data} às ${hora}`);
    } else {
      alert('Por favor, selecione data e horário.');
    }
  };

  return (
    <div className="agendamento-container">
      <h2 className="agendamento-titulo">Agende um atendimento</h2>
      <p className="agendamento-subtitulo">
        Selecione data e horário para criar o agendamento
      </p>
      <form onSubmit={handleSubmit}>
        <label className="agendamento-label">Data</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="agendamento-input"
        />

        <label className="agendamento-label">Horário</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="agendamento-input"
        />

        <button type="submit" className="agendamento-botao">
          AGENDAR
        </button>
      </form>
    </div>
  );
}


export default Agendamento;
