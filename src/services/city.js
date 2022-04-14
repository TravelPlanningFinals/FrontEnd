import { client } from './client';

export async function addCity(city) {
  const resp = await client.from('trips').insert({
    location,
    start_date,
    end_date,
    trips_id: client.auth.users_id().id,
  });
}
