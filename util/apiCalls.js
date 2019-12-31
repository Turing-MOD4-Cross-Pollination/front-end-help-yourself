// const baseUrl = `${process.env.REACT_NATIVE_BACK_END_URL}`
//must be set to local machines ip address when using running the graphql server locally
// const baseUrl = `http://192.168.0.239:4000/resources`;
const baseUrl = 'http://localhost:4000/resources'
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
