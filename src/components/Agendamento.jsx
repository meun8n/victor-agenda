import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Agendamento.css';

export default function Agendamento() {
  const [data, setData] = useState(null);
  const [horaSelecionada, setHoraSelecionada] = useState('');

  const horarios = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data && horaSelecionada) {
      alert(`Agendado para ${data.toLocaleDateString()} às ${horaSelecionada}`);
    } else {
      alert('Por favor, selecione data e horário.');
    }
  };

  return (
    <div className="popup-container">
      <h2 className="titulo">Agendamento</h2>
      <p className="descricao">
        Selecione data, horário e informe o nome do cliente para criar o agendamento
      </p>

      <form onSubmit={handleSubmit}>
        <label>Data</label>
        <DatePicker
          selected={data}
          onChange={(date) => setData(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd / mm / aaaa"
          className="input-data"
          calendarClassName="custom-calendar"
        />

        <div className="horarios">
          <span>Manhã</span>
          <div className="botoes">
            {horarios.slice(0, 4).map((h) => (
              <button
                type="button"
                key={h}
                className={horaSelecionada === h ? 'hora selecionado' : 'hora'}
                onClick={() => setHoraSelecionada(h)}
              >
                {h}
              </button>
            ))}
          </div>

          <span>Tarde</span>
          <div className="botoes">
            {horarios.slice(4, 9).map((h) => (
              <button
                type="button"
                key={h}
                className={horaSelecionada === h ? 'hora selecionado' : 'hora'}
                onClick={() => setHoraSelecionada(h)}
              >
                {h}
              </button>
            ))}
          </div>

          <span>Noite</span>
          <div className="botoes">
            {horarios.slice(9).map((h) => (
              <button
                type="button"
                key={h}
                className={horaSelecionada === h ? 'hora selecionado' : 'hora'}
                onClick={() => setHoraSelecionada(h)}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="botao-agendar">AGENDAR</button>
      </form>
    </div>
  );
}
