const baseUrl = 'https://stormy-depths-45174.herokuapp.com/resources';

export const getAllData = () => {
  const query = `query {resources { id, name, website,street, city, state, zip_code, contact, notes, category, subcategory }}`;

  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };

  return fetch(`${baseUrl}`, opts)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getMeetingData = () => {
  const query = `query { recovery{ title,subtitle, address}}`;

  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };

  return fetch(`${baseUrl}`, opts)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
