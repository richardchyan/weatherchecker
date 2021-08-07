const cityForm = document.querySelector('form.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateCity = async (city) => {

  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails, weather
  };

  // you are returning property : object name
  // this returned data is the DATA that is passed into the updateCity invocation below. Since this is an async, you can attach a then method 

}

const updateUI = data => {
  
  const cityDetails = data.cityDetails;
  const weather = data.weather;

  // when you take in data from the returned updateCity function, you take it as the para data, so then you are calling the new property within updateUI the same thing as it was called as the destructured form in updateCity, to make it simple and avoid confusion 

  // update the details, overwrite all the default html

  details.innerHTML = `
  
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // remove the d-none class if present (hides initial card when no city is serached)

  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

}


cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city).then(data => {
    updateUI(data);
  }).catch(error => {
    console.log(error);
  })
})