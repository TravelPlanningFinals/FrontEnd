export async function addGuests(
  name,
  email,
  phoneNumber,
  emergencyContact,
  tripsId
) {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/guests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        emergencyContact,
        tripsId,
      }),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteGuest(id) {
  try {
    const resp = await fetch(`${process.env.HEROKU_URL}/api/v1/guests/${id}`, {
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
