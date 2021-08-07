const forecast = new Forecast();
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");


// console.log(forecast);

const updateUI = (data) => {
  const cityDetails = data.cityDetails; // data.cityDetails is actually the RETURNED cityDetails from the updateCity function above, we are just storing it in a new cityDetails so you don't have to write data.cityDetails every time
  const weather = data.weather;

  // Updating the details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // Remove d-none class on the card that is blank at first

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  // Update the night/day and weather icons images

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "img/day.svg";
  } else {
    timeSrc = "img/night.svg";
  }

  time.setAttribute("src", timeSrc);

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
};

cityForm.addEventListener('submit', e => {

  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();

  forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));

  // // set local storage 
  // localStorage.setItem('city', city);

})