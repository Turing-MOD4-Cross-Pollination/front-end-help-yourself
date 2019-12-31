// const baseUrl = `${process.env.REACT_NATIVE_BACK_END_URL}`
const baseUrl = `http://10.1.3.61:4000/resources`;

export const getAllData = () => {
  const query = `query {resources { id, name, website,street, city, state, zip_code, contact, notes, category, subcategory }}`;
  
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  };
  
  return fetch(`${baseUrl}`, opts)
    .then(res => res.json())
    .catch(error=>console.log(error));
};
