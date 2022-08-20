import React, { useEffect, useState } from 'react'
import Title from '../Title/Title';
import Input from '../Input/Input';
import CalendarIcon from '../../images/calendar.svg';
import InfoIcon from '../../images/icon-button.svg';
import DateCarousel from '../DateCarousel/DateCarousel';
import Dropdown from '../Dropdown/Dropdown';
import '../Form/Form.css';
import Spoiler from '../Spoiler/Spoiler';

const Form = () => {

  const [selected, setSelected] = useState('');

  useEffect(() => {
    let form = document.querySelector('.form');
    let titles = document.querySelectorAll('.title');
    let spoilerWrappers = document.querySelectorAll('.spoiler__wrapper');
    let containers = document.querySelectorAll('.spoiler__wrapper');
    console.log(titles, spoilerWrappers);

    for (let i = 0; i < titles.length; i++) {
     // titles[i].classList.add('spoiler__title');
      titles[i].addEventListener('click', (e) => {
        let btn = e.target;
        if (!btn.className === "spoiler__title active") {
          btn.classList.remove('active')
          removeClass()
        } else {
          removeClass()
          btn.classList.add('active');
        }
      })
    }

    function removeClass() {
      for (let i = 0; i < titles.length; i++) {
        titles[i].classList.remove('active')
      }
    }
    window.addEventListener('resize', (e) => {

      let container = document.querySelector('.spoiler__wrapper');
      if (window.innerWidth < 650) {
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.add('spoiler__title');
          containers[i].classList.add('spoiler-content');
        }
        form.classList.add('form__spoiler')
        // container.classList.add('spoiler-content')
        console.log(container)
      } else {
        // container.classList.remove('spoiler-content')
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.remove('spoiler__title');
          containers[i].classList.remove('spoiler-content')
        }
        form.classList.remove('form__spoiler')
      }
       })
    })

    return (
      <div className='form'>
        <fieldset className='form__personal-info personal-info'>
          <Title title='Кто будет сдавать анализы?' />
          <div className='spoiler__wrapper'>
            <div className='form__btn-row btn-row'>
              <input  className='btn-row__text' type='text' value='Пациент из моей семьи' />
              <button className='btn-row__button' type='button'>Новый пациент</button>
            </div>
            <div className='personal-info__columns columns'>
              <Input label='Фамилия пациента' type='text' name='surname' />
              <Input label={'Дата рождения пациента'} type={'text'} name='birthday' icon={CalendarIcon} />
              <Input label='Имя пациента' type='text' name='name' />
              <div className='form__row'>
                <Input label='Женщина' type='radio' name='gender' />
                <Input label='Мужчина' type='radio' name='gender' />
              </div>
              <Input label='Отчество пациента' type='text' name='patronymic' />
            </div>
            <Input label={'Пациент придёт с представителем'} type='checkbox' icon={InfoIcon} />
          </div>
        </fieldset>

         {/* <fieldset className='form__personal-info personal-info'>
        <Title title='Кто будет сдавать анализы?' />
        <div className='spoiler__wrapper'>
        <div className='form__btn-row'>
          <input type='text' value='Пациент из моей семьи' />
          <button type='button'>Новый пациент</button>
        </div>
        <div className='personal-info__columns columns'>
          <Input label='Фамилия пациента' type='text' name='surname' />
          <Input label={'Дата рождения пациента'} type={'text'} name='birthday' icon={CalendarIcon} />
          <Input label='Имя пациента' type='text' name='name' />
          <div className='form__row'>
            <Input label='Женщина' type='radio' name='gender' />
            <Input label='Мужчина' type='radio' name='gender' />
          </div>
          <Input label='Отчество пациента' type='text' name='patronymic' />
        </div>
        <Input label={'Пациент придёт с представителем'} type='checkbox' icon={InfoIcon} />
        </div>
      </fieldset>  */}




        <fieldset className='form__contacts contacts'>
        <Title title='Данные для отправки анализов' />
        <div className='spoiler__wrapper'>
        <h5 className='contacts__text text'>Поступят вам на почту, указанную в договоре. Вам придет смс-уведомление о готовности</h5>
        <div className='contacts__info'>
          <div className='contacts__info-row'>
            <Input label='Номер телефона' type='text' name='phone' direction='right' />
            <Input label='Код' type='text' name='code' direction='left' />
          </div>
          <Input label='Email' type='text' name='email' />
        </div>
        </div>
      </fieldset> 

        <fieldset className='form__passport passport'>
        <Title title='Для оформления договора понадобится паспорт ' />
        <div className='spoiler__wrapper'>
        <h5 className='password__text text'>Выберите как вам удобнее предоставить данные</h5>
        <div className='passport__row'>
          <Input label='Заполню сейчас' type='radio' name='data-receive-method' />
          <Input label='Предоставлю на месте' type='radio' name='data-receive-method' />
          <Input label='Свяжитесь со мной сами' type='radio' name='data-receive-method' />
        </div>
        <h2 className='passport__subtitle subtitle'>Паспорт пациента</h2>
        <div className='passport__info-columns columns'>
        <Dropdown selected={selected} setSelected={setSelected} withBtn={false}/>
          <Input label='Кем выдан паспорт' type='text' name='passport' />
          <Input label='Номер и серия паспорта' type='text' name='passport-series' />
          <Input label='Дата выдачи' type='text' name='issue-date' icon={CalendarIcon} />
        </div>
        <Input label='Адрес регистрации' type='text' name='issue-date' />
        <h2 className='passport__subtitle subtitle'>Добавьте СНИЛС, для синхронизации с Госуслугами</h2>
        <Input label='СНИЛС' type='text' name='snils' />
        </div>
      </fieldset> 
         <fieldset className='form__payment-method payment'>
        <Title title='Способ оплаты' />
        <div className='spoiler__wrapper'>
        <Dropdown selected={selected} setSelected={setSelected} withBtn={true}/>
        </div>
      </fieldset>
      <fieldset className='form__date-time date-time'>
      <Title title='Выберите удобные дату и время'/>
      <div className='spoiler__wrapper'>
      <DateCarousel />
      </div>
      </fieldset>
      <fieldset className='form__comments'>
       <Title title='Комментарий к заказу'/>
       <div className='spoiler__wrapper'>
         <textarea className='form__comments-input' placeholder='Напишите коментарий лаборатории...'/>
       </div>
      </fieldset> 
      </div>
    )
  }

export default Form;