import React, { useEffect, useState } from 'react';
import DateDetails from '../../components/Plan/Dates/DateDetails';
import X from '../../assets/images/X.png';
import calendar from '../../assets/images/calendar.png';
import { useParams } from 'react-router-dom';
import { getTripsById } from '../../services/trips';
import CountDown from '../../utils/countdown';

export default function Dates() {
  const { id } = useParams();
  const [startDate, setStartDate] = useState('');

  const [style, setStyle] = useState('dateInfo');
  const [hidden, setHidden] = useState('hidden');
  const [XStyle, setXStyle] = useState('hidden');
  const [image, setImage] = useState('calendar');

  function handleClick() {
    setStyle('dateInfoBig');
    setHidden(null);
    setXStyle('X');
    setImage('hidden');
  }

  function minimize() {
    setStyle('dateInfo');
    setHidden('hidden');
    setXStyle('hidden');
    setImage('calendar');
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTripsById(id);
      const day = data.startDate;
      setStartDate(day);
    };
    fetchData();
  }, []);

  const count = CountDown(startDate);
  console.log('count', count);

  return (
    <div>
      <img onClick={minimize} src={X} class={XStyle}></img>

      <div onClick={handleClick} className={style}>
        {/* --- Show Start and end Date of Trip from back end --- */}
        <h1 className="padding">Date Page</h1>
        {/* --- Count down to start date --- */}
        <h2>Count down until Trip</h2>
        <img src={calendar} class={image}></img>
        <div className={hidden}>
          <DateDetails />
        </div>
      </div>
    </div>
  );
}
