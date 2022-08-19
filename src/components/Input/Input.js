import React from 'react';
import '../Input/Input.css';

const Input = ({ label, type, name, icon = null, direction='' }) => {


    return (
        <div className='input'>
            {type === 'text' ?
            <div className={`input__floating-label-group`}>
                 <input type={type} id='name' className={`input__${type} input-${direction}`} autoComplete='off' name={name} autoFocus required />
                 <label className='input__floating-label'>{label}</label>
                 {icon &&  <img  className={`input__${type}-icon`} src={icon} alt='icon' />}
            </div>   
            : 
             <div className={`input__${type}-wrapper ${type}`}>
                  <input className={`input__${type}`} id={name} type={type} name='gender' value={name} />
                  <label htmlFor={name}>{label}</label>
                  {icon &&  <img  className={`input__${type}-icon`} src={icon} alt='icon' />}
             </div>
            }
        </div>
    )
}
export default Input;