import { check } from 'prettier';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLodgingById, updateLodging } from '../../../services/lodging';
import './lodging.css';
import LodgingForm from './LodgingForm';

export default function LodgingDetails() {
  const [nameOfPlace, setNameOfPlace] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [pricePerNight, setPricePerNight] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLodgingById(params.id);
      setNameOfPlace(data.nameOfPlace);
      setContactInfo(data.contactInfo);
      setPricePerNight(data.pricePerNight);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setAddress1(data.address1);
      setAddress2(data.address2);
      setCity(data.city);
      setState(data.state);
      setZip(data.ciy);
    };
    fetchData();
  }, [params.id]);

  const hanldeSubmit = async (e) => {
    try {
      e.preventDefault();
      const redir = await updateLodging(
        params.id,
        nameOfPlace,
        contactInfo,
        pricePerNight,
        checkIn,
        checkOut,
        address1,
        address2,
        city,
        state,
        zip
      );
      alert('You updated the info!');
    } catch (error) {
      alert('Info Failed to update');
    }
  };

  return (
    <div>
      <LodgingForm
        nameOfPlace={nameOfPlace}
        setNameOfPlace={setNameOfPlace}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        pricePerNight={pricePerNight}
        setPricePerNight={setPricePerNight}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        address1={address1}
        setAddress1={setAddress1}
        address2={setAddress2}
        setAddress2={setAddress2}
        city={city}
        setCity={setCity}
        state={state}
        setState={setState}
        zip={zip}
        setZip={setZip}
        hanldeSubmit={hanldeSubmit}
      />
    </div>
  );
}
