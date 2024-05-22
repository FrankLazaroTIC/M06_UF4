import React from 'react';
import { Link } from 'react-router-dom';

function Welcome({ username }) {
  return (
    <div>
      <h1>Hola, {username}!</h1>
      <p>Pel·lícules per a l'estiu</p>
    </div>
  );
}

export default Welcome;