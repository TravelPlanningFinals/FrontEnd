export async function getYelp(location) {
  try {
    const res = await fetch(
      `${process.env.HEROKU_URL}/api/v1/yelp?location=Reno`,
      {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
      }
    );
    return await res.json();
  } catch (error) {
    next(error);
  }
}
