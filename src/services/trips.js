export async function addTrips(location, startDate, endDate, userId) {
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
        userId,
      }),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export async function getAllTrips() {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/trips`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getTripsById(id) {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/trips/${id}`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    return res.json();
  } catch (error) {}
}
