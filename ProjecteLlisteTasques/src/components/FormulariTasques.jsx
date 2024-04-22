import React, { useState } from 'react';

function FormulariTasques({ funcAfegirTasca }) {
  const [textTasca, setTextTasca] = useState('');

  const canviTextTasca = e => {
    setTextTasca(e.target.value);
    console.log('value is:', e.target.value);
  };

  const enviarForm = e => {
    e.preventDefault();
    const tascaNova = {
      text: textTasca,
      completada: false
    }
    funcAfegirTasca(tascaNova);
    setTextTasca('');
  };

  return (
    <form onSubmit={enviarForm}>
      <input type="text" value={textTasca} onChange={canviTextTasca} />
      <button type="submit">Añadir tarea</button>
    </form>
  );
}

export default FormulariTasques;