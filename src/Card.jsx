import React from 'react';
import './Card.css';

const Card = ({ image, name, description, link }) => {
  return (
    <a href={link} className="card" target="_blank" rel="noopener noreferrer">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
    </a>
  );
};

export default Card;