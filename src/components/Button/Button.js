import React from 'react';
import '../Button/Button.css';

const Button = ({ title }) => {
  return (
    <button className='button'>
     {title}
    </button>
  )
}

export default Button;