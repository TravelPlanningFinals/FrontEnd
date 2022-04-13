export async function fetchYelp() {
  const resp = await fetch(
    'https://cors-anywhere-travel.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=NYC',
    {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API}`,
      },

      params: { limit: 5, sort_by: 'relevance', term: 'bars' },

      // categories: 'bars',
    }
  );

  const data = await resp.json();

  console.log('data', data);
  return data;
}
