import React from 'react';
import Button from '../Button/Button';
import '../CardRow/CardRow.css';

const CardRow = ({ title }) => {
  return (
    <div className='card-row'>
     <p>{title}</p>
     <Button title="Выбрать"/>
    </div>
  )
};

export default CardRow;