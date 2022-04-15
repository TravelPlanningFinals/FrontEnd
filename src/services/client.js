import { createClient } from '@supabase/supabase-js';

export const client = createClient(
  //change to react/supabase url
  process.env.HEROKU_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export const parseData = ({ data, error }) => {
  if (error) throw error;

  return data;
};
