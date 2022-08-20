import React, { useState } from 'react';
import '../Input/Input.css';

const Input = ({ label, type, validationType, name, icon = null, direction='', validationdata, error }) => {
   const isError = error?.find(i => i.name === name);

  

    return (
        <div className='input'>
            {type === 'text' ?
            <div className={`input__floating-label-group`}>
                 <input type={type} id='name' className={`input__${type} input-${direction}`} autoComplete='off' name={name} autoFocus required  onChange={(e) => validationdata(e.target.value, validationType, name)}/>
                 <label className='input__floating-label'>{label}</label>
                 {icon &&  <img  className={`input__${type}-icon`} src={icon} alt='icon' />}   
                 {isError ? <span className='input__error'> Данные введены некорректно</span> : <span className='input__error'>{null}</span>}            
            </div>   
            : 
             <div className={`input__${type}-wrapper ${type}`}>
                  <input className={`input__${type}`} id={name} type={type} name='gender' />
                  <label htmlFor={name}>{label}</label>
                  {icon &&  <img  className={`input__${type}-icon`} src={icon} alt='icon' />}
             </div>
            }
        </div>
    )
}
export default Input;