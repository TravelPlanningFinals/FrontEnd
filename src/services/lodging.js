export async function addLodging(
  nameOfPlace,
  contactInfo,
  pricePerNight,
  checkIn,
  checkOut,
  address1,
  address2,
  city,
  state,
  zip,
  tripsId
) {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/lodging`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        nameOfPlace,
        contactInfo,
        pricePerNight,
        checkIn,
        checkOut,
        address1,
        address2,
        city,
        state,
        zip,
        tripsId,
      }),
    });
    console.log('res', res);
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
}
