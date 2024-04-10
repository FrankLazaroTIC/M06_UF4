import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Comptador from './Counter';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    console.log('Incrementant el número');
    setNumClicks(numClicks + 1);
  };

  const reiniciarNum = () => {
    console.log('Reiniciant el número');
    setNumClicks(0);
  };

  return (
    <div className="App">
      <Comptador count={numClicks} />
      <Button text="Clic" onClick={incrementNum} esClick={true} />
      <Button text="Reiniciar" onClick={reiniciarNum} esClick={false} />
    </div>
  );
}

export default App;;