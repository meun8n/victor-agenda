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
    <div className="container">
      <h2 className="title">Agendamento</h2>
      <p className="subtitle">Selecione uma data e horário:</p>

      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}
