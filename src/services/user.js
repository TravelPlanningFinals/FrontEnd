const client = `${process.env.HEROKU_URL}/api/v1/trips`;

function parseData({ data, error }) {
  if (error) throw error;
  return data[0];
}

const fetchUser = async () => {
  const userData = await client.from('users').select();
  return parseData(userData);
};

export default fetchUser;
