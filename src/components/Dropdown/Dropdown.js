import React, { useState } from 'react';
import '../Dropdown/Dropdown.css';
import ArrowIcon from '../../images/arrow-down.svg';
import Button from '../Button/Button';

const Dropdown = ({ selected, setSelected, withBtn = false }) => {
    const [isActive, setISActive] = useState(false);
    const countryOptions = ['Россия', 'Казахстан'];
    const paymentOptions = ['Картой медработнику после оказания услуг', 'Онлайн банковской картой']

    const changeActiveMode = () => setISActive(!isActive);
    const setSelectedData = (val) => {
        setSelected(val);
        setISActive(false)
    }
    return (
        <>
            {
                withBtn ?
                <div className='dropdownBtn__wrapper'>
                    <div className='dropdownBtn'>
                        <div onClick={changeActiveMode} className={selected === "" ? 'dropdownBtn__btn' : 'dropdownBtn__btn selected'} >{selected === "" ? 'Выберите способ оплаты' : selected}<img src={ArrowIcon} alt="arrow" /></div>
                    </div>
                        {isActive && (<div className='dropdownBtn__content'>
                            {paymentOptions.map(option => (
                                <div className='dropdownBtn__item' onClick={() => setSelectedData(option)}>{option} <Button title='Выбрать'/></div>
                            ))}
                        </div>)}
                </div>
                    : (
                        <div className='dropdown'>
                            <div onClick={changeActiveMode} className={selected === "" ? 'dropdown__btn' : 'dropdown__btn selected'} >{selected === "" ? 'Гражданство' : selected}<img src={ArrowIcon} alt="arrow" /></div>
                            {isActive && (<div className='dropdown__content'>
                                {countryOptions.map(option => (
                                    <div className='dropdown__item' onClick={() => setSelectedData(option)}>{option}</div>
                                ))}
                            </div>)}
                        </div>

                    )
            }
        </>
    )
}

export default Dropdown;