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
    console.log('res', res);
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
}
