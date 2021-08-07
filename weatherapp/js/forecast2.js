const key = "R8rx0eSJ4MUu1XIgtvZYJrbhnaHP6TqS";

const getCity = async (city) => {

  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base+query);
  const data = await response.json();

  return data[0];
}

// getCity('Toronto').then(function(data){
//   console.log(data);
// })

const getWeather = async(locationKey) => {

  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationKey}?apikey=${key}`;
  const response = await fetch(base+query);
  const data = await response.json();

  return data[0];

};

// getCity('Toronto').then(data => {
//   return getWeather(data.Key);
// }).then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });

