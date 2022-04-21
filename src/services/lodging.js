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
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
}

export async function deleteLodging(id) {
  try {
    const resp = await fetch(`${process.env.HEROKU_URL}/api/v1/lodging/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
      mode: 'cors',
    });
    const json = await resp.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
