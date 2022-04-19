const client = `${process.env.HEROKU_URL}/api/v1/lodging`;

export async function getLodgingById(id) {
  let resp = await client.from('lodging').select().match({ id }).single();
  return checkError(resposne);
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
  let resp = client
    .from('lodging')
    .update({
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
