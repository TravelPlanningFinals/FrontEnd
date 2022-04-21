export async function addFlights(
  airline,
  departure,
  arrival,
  flightNumber,
  tripsId
) {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/flights`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        airline,
        departure,
        arrival,
        flightNumber,
        tripsId,
      }),
    });
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
}

export async function deleteFlight(id) {
  try {
    const resp = await fetch(`${process.env.HEROKU_URL}/api/v1/flights/${id}`, {
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
