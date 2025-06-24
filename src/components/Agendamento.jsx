import React, { useState } from 'react';

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
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Agendamento</h2>
        <p style={styles.subtitle}>Selecione uma data e horário:</p>

        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            style={styles.input}
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Agendar</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '16px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    marginBottom: '24px',
    fontSize: '16px',
    color: '#666',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#7c3aed',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
