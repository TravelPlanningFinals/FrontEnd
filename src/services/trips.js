export async function addTrips(location, startDate, endDate) {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/trips`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        location,
        startDate,
        endDate,
      }),
    });
    console.log('res', res);
    return res.json();
  } catch (error) {
    console.log('there was an error', error);
  }
}
