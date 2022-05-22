const temperatureInfo = document.querySelector(".weather-info__temperature");
const locationInfo = document.querySelector(".weather-info__location");

function geoOk(position) {
  const API_KEY = "277f24759dca5f23fec595da7383bfc5";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temperatureInfo.innerText = `${data.weather[0].main}/${data.main.temp}℃`;
      locationInfo.innerText = data.name;
    });
}

function geoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
