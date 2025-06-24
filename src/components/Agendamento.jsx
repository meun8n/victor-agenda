import React, { useState } from 'react';
import './Agendamento.css';

export default function Agendamento() {
  const [dataSelecionada, setDataSelecionada] = useState('');
  const [horaSelecionada, setHoraSelecionada] = useState('');

  const horarios = {
    manhã: ['09:00', '10:00', '11:00', '12:00'],
    tarde: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    noite: ['19:00', '20:00', '21:00']
  };

  return (
    <div className="popup-container">
      <div className="popup-card">
        <h2 className="titulo">Agende um atendimento</h2>
        <p className="sub">Selecione data, horário e informe o nome do cliente para criar o agendamento</p>

        <label>Data</label>
        <input
          type="date"
          value={dataSelecionada}
          onChange={(e) => setDataSelecionada(e.target.value)}
        />

        <div className="secao">
          <span>Manhã</span>
          <div className="botoes">
            {horarios.manhã.map((hora) => (
              <button
                key={hora}
                className={horaSelecionada === hora ? 'hora selecionado' : 'hora'}
                onClick={() => setHoraSelecionada(hora)}
              >
                {hora}
              </button>
            ))}
          </div>

          <span>Tarde</span>
          <div className="botoes">
            {horarios.tarde.map((hora) => (
              <button
                key={hora}
                className={horaSelecionada === hora ? 'hora selecionado' : 'hora'}
                onClick={() => setHoraSelecionada(hora)}
              >
                {hora}
              </button>
            ))}
          </div>

          <span>Noite</span>
          <div className="botoes">
            {horarios.noite.map((hora) => (
              <button
                key={hora}
                className={horaSelecionada === hora ? 'hora selecionado' : 'hora'}
                onClick={() => setHoraSelecionada(hora)}
              >
                {hora}
              </button>
            ))}
          </div>
        </div>

        <button className="botao-agendar">AGENDAR</button>
      </div>
    </div>
  );
}
