// const client = `${process.env.HEROKU_URL}/api/v1/lodging`;

// export async function getLodgingById(id) {
//   let resp = await client.from('lodging').select().match({ id }).single();
//   return checkError(resposne);
// }

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
    console.log('lodging res', res);
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
}

// export async function updateLodging(
//   id,
//   nameOfPlace,
//   contactInfo,
//   pricePerNight,
//   checkIn,
//   checkOut,
//   address1,
//   address2,
//   city,
//   state,
//   zip
// ) {
//   let resp = client.from('lodging').update({
//     nameOfPlace,
//     contactInfo,
//     pricePerNight,
//     checkIn,
//     checkOut,
//     address1,
//     address2,
//     city,
//     state,
//     zip,
//   });
//   return checkError(response);
// }
