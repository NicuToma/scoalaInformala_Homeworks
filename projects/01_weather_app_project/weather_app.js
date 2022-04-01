let city = document.querySelector(".city");
console.log(city.value);

document.querySelector(".show_weather").addEventListener("click", showWeather);
async function showWeather() {
  let URL_CURRENT_WEATHER =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city.value +
    "&units=metric&appid=34c95be7b7278785e1d8b866534c2eb5";

  if (city.value == "") {
    alert("Please choose your city!");
  } else {
    let resp = await fetch(URL_CURRENT_WEATHER);
    let weather = await resp.json();
    var output = `<div class="city-weather">
            <h2>${weather.name}</h2>
            <p>Temp: ${Math.round(weather.main.temp)}°C</p>
            <p>${weather.weather[0].description}</p>
            <img src="https://openweathermap.org/img/w/${
              weather.weather[0].icon
            }.png">
         </div>`;
    document.querySelector(".weather_card").innerHTML = output;
    console.log(weather);
    city.value = "";
  }
}
