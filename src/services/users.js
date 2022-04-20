export const signOut = async () => {
  const res = await fetch(`${process.env.HEROKU_URL}/api/v1/github/login`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });
  window.location.replace('/trips');

  return res.ok;
};

export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.HEROKU_URL}/api/v1/github/me`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    return res.json();
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
