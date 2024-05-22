import React from 'react';

function MovieCard({ title, image, rate, description, duration }) {
  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <img src={image} alt={title} style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h2>{title}</h2>
        <p>Rating: {rate}/10 </p>
        <p>Direction: {description}</p>
        <p>Duration: {duration} hour/s</p>
      </div>
    </div>
  );
}

export default MovieCard;