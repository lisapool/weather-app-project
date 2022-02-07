 // Current city API

 let apiKey = "03badf8a03b8a5c907ffca283c59bd45";

 function displayName(response) {
     console.log(response.data.name);
     let cityName = (response.data.name);
     let displayCity = document.querySelector("#current-city-text");
     let tomorrowCurrentCityText = document.querySelector(
      "#tomorrow-current-city-text");
     displayCity.innerHTML = `Current weather in ${cityName}`;
     tomorrowCurrentCityText.innerHTML = `Tomorrow's weather in ${cityName}`;
     let temperature = Math.round(response.data.main.temp);
     console.log(temperature);
     let currentTemperature = document.querySelector("#current-temperature");
     currentTemperature.innerHTML = `${temperature}°C`;
     let weatherDescription = (response.data.weather[0].description);
     let displayWeatherDescription = document.querySelector("#weather-description");
     displayWeatherDescription.innerHTML = `${weatherDescription}`;
     let feelsLikeTemp = Math.round(response.data.main.feels_like);
     let displayFeelsLike = document.querySelector("#feels-like");
     displayFeelsLike.innerHTML = `Feels like ${feelsLikeTemp}°C`;
 }
 
 function callCity(event) {
     event.preventDefault();
     let cityInput = document.querySelector("#current-city");
     let currentCityText = `${cityInput.value}`; 
  let apiKey = "03badf8a03b8a5c907ffca283c59bd45";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let locationApi = `${apiEndpoint}q=${currentCityText}&units=${units}&appid=${apiKey}`;
  axios.get(`${locationApi}`).then(displayName); 
 }

 function callCurrentLocation(event) {
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(showLocation);
 }

 function showLocation (position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "03badf8a03b8a5c907ffca283c59bd45";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let locationApi = `${apiEndpoint}&lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(`${locationApi}`).then(displayCurrentLocation);
 }

 function displayCurrentLocation (response) {
  console.log(response.data.name);
  let cityName = (response.data.name);
  let displayCity = document.querySelector("#current-city-text");

  let tomorrowCurrentCityText = document.querySelector(
   "#tomorrow-current-city-text");
  displayCity.innerHTML = `Current weather in ${cityName}`;
  tomorrowCurrentCityText.innerHTML = `Tomorrow's weather in ${cityName}`;

  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}°C`;

  let weatherDescription = (response.data.weather[0].description);
  let displayWeatherDescription = document.querySelector("#weather-description");
  displayWeatherDescription.innerHTML =  `You can expect ${weatherDescription}`;
  console.log(weatherDescription);

  let feelsLikeTemp = Math.round(response.data.main.feels_like);
  let displayFeelsLike = document.querySelector("#feels-like");
  displayFeelsLike.innerHTML = `Feels like ${feelsLikeTemp}°C`;
  console.log = (response.data.sys.country);
 }

 function showWeatherCard() {
  let currentWeatherCard = document.querySelector("#current-weather-card");
  currentWeatherCard.style.display = "block";
 }


 
 let searchForm = document.querySelector("#search-form");
     searchForm.addEventListener ("submit", callCity);
     searchForm.addEventListener ("submit", displayTime);
    

  let currentLocation = document.querySelector("#current-location");
  currentLocation.addEventListener ("submit", callCurrentLocation);
  currentLocation.addEventListener ("submit", displayTime);
 


  //Date and time
  
  let now = new Date();
  
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let minutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59"
  ];
  
  let currentMonth = months[now.getMonth()];
  let currentDay = days[now.getDay()];
  let currentYear = now.getFullYear();
  let currentDate = now.getDate();
  let currentHour = now.getHours();
  let currentMinute = minutes[now.getMinutes()];
  
  function displayTime (event){
  event.preventDefault;
  let currentDateTime = document.querySelector("h4#currentDateTime");
  currentDateTime.innerHTML = `| ${currentHour}:${currentMinute} | ${currentDate}/${currentMonth}/${currentYear}`;
  let displayCurrentDay = document.querySelector("h4#currentDay");
  displayCurrentDay.innerHTML = `${currentDay}`;
  }