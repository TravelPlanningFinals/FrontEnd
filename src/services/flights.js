export async function addFlights(airline, departure, arrival) {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/flights`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ airline, departure, arrival }),
    });
    console.log('res', res);
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
}
