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

export async function getAllTrips() {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/trips`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    return res.json();
  } catch (error) {}
}
