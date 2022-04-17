const client = `${process.env.HEROKU_URL}/api/v1/trips`;

export async function addTrip(location) {
  const resp = await client.from('trips').insert({
    location,
    start_date,
    end_date,
    trips_id: client.auth.users_id().id,
  });

  return resp;
}
