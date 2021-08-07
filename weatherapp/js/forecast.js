// Forecast.js is for interaction with the API 


// create a const with a key 

const key = "R8rx0eSJ4MUu1XIgtvZYJrbhnaHP6TqS";

// Test out the request in the get city information, then take the keycode from that can send the next request 

// Locations API
const getCity = async (city) => {

  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  // what you want to be specific about 

  const response = await fetch(base + query);

  if(response.status !==200){
    throw new Error('cant fetch the data');
  }

  const data = await response.json();

  // console.log(data[0]);
  return data[0]; // returns only the most matching city with that name
}

// getCity('toronto').then(function(data){
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// })

// Weather Current conditions API 

const getWeather = async(locationKey) => {

  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationKey}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data); // logs an array with one object so just return the object so it's easier to read
  return data[0]; // object is returned

}

// Since we want to combine the two functions together, we put the city key into the get weather function. Remember the location key is capitalized

getCity('Toronto').then(data => {
  return getWeather(data.Key);
}).then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
})