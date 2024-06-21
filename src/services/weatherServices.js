const API_KEY = 'f814bfb810d840a09fe200705242006';

const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`


//this is the function that makes the api request

async function show(city){
  const queryString = `&q=${city}`
  try {
    const response = await fetch(BASE_URL + queryString)
    const data = await response.json()
    console.log(`data`, data)
    return data;
  } catch (err) {
    console.log(err)
  }
}
// show('Oakland')
export { show };