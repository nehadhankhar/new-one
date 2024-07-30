const inputBox = document.querySelector('.input-box');
const searchBTN = document.querySelector('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');


async function checkweather(city){
  const api_key = "dcad2c1d3e494b2dd01c9a90ec55a2d3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}` ;

  const weather_data = await fetch(`${url}`).then(response => response.json());

  temperature.innerHTML= `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `Humidity ${weather_data.main.humidity}%`;
  wind.innerHTML = `Wind ${weather_data.wind.speed}KPH`;

// console.log(weather_data);
}
searchBtn.addEventListener('click',()=>{
     checkweather(inputBox.value)
});
