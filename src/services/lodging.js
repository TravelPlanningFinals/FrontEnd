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
<<<<<<< HEAD
    console.log('lodging res', res);
=======
>>>>>>> 575014453726a33d286d3fce7701e8dc12a3bd6c
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
<<<<<<< HEAD
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
=======
}
>>>>>>> 575014453726a33d286d3fce7701e8dc12a3bd6c
