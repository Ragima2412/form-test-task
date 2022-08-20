import React, { useEffect, useState } from 'react';
import ArrowIcon from '../../images/arrow.png';
import '../DateCarousel/DateCarousel.css';

const DateCarousel = () => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    const [showDays, setShowDays] = useState([]);
    const [monthName, setMonthName] = useState("Апрель");

    const calendar = [];
    const times = ['08:00', '08:30', '09:00', '11:30', '16:00'];
    let weekdays = new Array(62);
    weekdays = weekdays.fill(["пт", "вт", "ср", "чт", "пт", "сб", "вс"]).flat();


    const setMonth = () => {
        if (end <= 32) {
            setMonthName("Апрель")
        } else if (end > 27 && start < 32) {
            setMonthName("Апрель-Май")
        } else if (start <= 30) {
            setMonthName("Май")
        } else setMonthName("Май")
    }

    for (let count = 0; count < 3; count++) {
        for (let i = 1; i <= 31; i++) {
            calendar.push({ day: i, weekday: weekdays[i] });
        }
        count++;
    }

    const onPrevClickHandler = () => {
        if (start === 0) return setShowDays([...calendar.slice(0, 10)]);
        setStart(prev => prev - 1);
        setEnd(prev => prev - 1);
        setShowDays([...calendar.slice(start, end)]);
        setMonth()
    }

    const onNextClickHandler = () => {
        if (end === 62) return setShowDays([...calendar.slice(52, 62)]);
        setStart(prev => prev + 1);
        setEnd(prev => prev + 1);
        setShowDays([...calendar.slice(start, end)]);
        setMonth();
    }

    useEffect(() => {
        setShowDays([...calendar.slice(0, 10)])
    }, []);

    return (
        <div className='carousel'>
            <div className='carousel__wrapper'>
                <div className='carousel-controllers'>
                    <button onClick={onPrevClickHandler} className={start === 0 ? 'disableMode' : null} >
                        <img src={ArrowIcon} alt="prev" />
                    </button >
                    <p>{monthName}</p>
                    <button onClick={onNextClickHandler} className={end === 62 ? 'disableMode' : null}>
                        <img src={ArrowIcon} alt="next" />
                    </button>
                </div>
                <div className='carousel__dates'>
                    {
                        showDays.map((item, index) =>
                            index < 10
                                ? <div className='carousel__btn-date' key={index}>
                                    <span>{item.day}</span>
                                    <span>{item.weekday}</span>
                                </div>
                                : null)
                    }
                </div>
            </div>
            <div className='carousel__times'>
                {
                    times.map((time, index) => (
                        <button className='carousel__btn-time' key={index}>
                            {time}
                        </button>))
                }
            </div>
        </div>
    )
}

export default DateCarousel;