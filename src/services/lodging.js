const client = `${process.env.HEROKU_URL}/api/v1/lodging`;

export async function getLodgingById(id) {
  let response = await client.from('lodging').select().match({ id }).single();
  return checkError(response);
}

export async function updateLodging(
  id,
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
) {
  let response = client.from('lodging').update({
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
  });
  return checkError(response);
}
