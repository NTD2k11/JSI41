// let box = document.querySelector(".box")
// fetch("https://geocoding-api.open-meteo.com/v1/search?name=bangkok")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {

//         console.log(data);
//         let latitude = data.results[0].latitude
//         let longitude = data.results[0].longitude

//         fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
//             .then(function (response) {
//                 return response.json()
//             })
//             .then(function (dataWeather) {
//                 console.log(dataWeather);

//             })

//         let center = document.createElement("div")
//         for (let i = 0; i < data.results.lenght; i++) {
//             center.className = "center"
//             center.innerHTML = `
//             <input type="text" placeholder="Enter location"></input>
//             <div class="box_show">
//                 <h1>${data.results[i]}</h1>
//             </div>

//         `
//             box.appendChild(center)
//         }



//     })
const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Rain showers: Slight",
  81: "Rain showers: Moderate",
  82: "Rain showers: Violent",
  85: "Snow showers: Slight",
  86: "Snow showers: Heavy",
  95: "Thunderstorm: Slight or moderate",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail"
};

const weatherIcons = {
  0:  { day: "wi wi-day-sunny animated",            night: "wi wi-night-clear animated" },
  1:  { day: "wi wi-day-sunny-overcast animated",   night: "wi wi-night-alt-partly-cloudy animated" },
  2:  { day: "wi wi-day-cloudy animated",           night: "wi wi-night-alt-cloudy animated" },
  3:  { day: "wi wi-cloudy animated",               night: "wi wi-cloudy animated" },
  45: { day: "wi wi-fog animated",                  night: "wi wi-fog animated" },
  48: { day: "wi wi-fog animated",                  night: "wi wi-fog animated" },
  51: { day: "wi wi-sprinkle animated",             night: "wi wi-sprinkle animated" },
  53: { day: "wi wi-sprinkle animated",             night: "wi wi-sprinkle animated" },
  55: { day: "wi wi-sprinkle animated",             night: "wi wi-sprinkle animated" },
  56: { day: "wi wi-hail animated",                 night: "wi wi-hail animated" },
  57: { day: "wi wi-hail animated",                 night: "wi wi-hail animated" },
  61: { day: "wi wi-rain animated",                 night: "wi wi-rain animated" },
  63: { day: "wi wi-rain animated",                 night: "wi wi-rain animated" },
  65: { day: "wi wi-rain animated",                 night: "wi wi-rain animated" },
  66: { day: "wi wi-rain-mix animated",             night: "wi wi-rain-mix animated" },
  67: { day: "wi wi-rain-mix animated",             night: "wi wi-rain-mix animated" },
  71: { day: "wi wi-snow animated",                 night: "wi wi-snow animated" },
  73: { day: "wi wi-snow animated",                 night: "wi wi-snow animated" },
  75: { day: "wi wi-snow animated",                 night: "wi wi-snow animated" },
  77: { day: "wi wi-snowflake-cold animated",       night: "wi wi-snowflake-cold animated" },
  80: { day: "wi wi-showers animated",              night: "wi wi-showers animated" },
  81: { day: "wi wi-showers animated",              night: "wi wi-showers animated" },
  82: { day: "wi wi-showers animated",              night: "wi wi-showers animated" },
  85: { day: "wi wi-snow-wind animated",            night: "wi wi-snow-wind animated" },
  86: { day: "wi wi-snow-wind animated",            night: "wi wi-snow-wind animated" },
  95: { day: "wi wi-thunderstorm animated",         night: "wi wi-thunderstorm animated" },
  96: { day: "wi wi-thunderstorm animated",         night: "wi wi-thunderstorm animated" },
  99: { day: "wi wi-thunderstorm animated",         night: "wi wi-thunderstorm animated" }
};

function weather() {
    const country = document.getElementById("input").value

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(country)}&count=1&language=vi`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (!data.results || data.results.length === 0) {
                alert("Không tìm thấy thành phố!")
            } else {
                let latitude = data.results[0].latitude
                let longitude = data.results[0].longitude
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (dataWeather) {
                        console.log(dataWeather);
                        let code = dataWeather.current_weather.weathercode;
                        let isDay = dataWeather.current_weather.is_day
                        let icon
                        if(!isDay){
                            icon = weatherIcons[code].night
                        }else{
                            icon = weatherIcons[code].day
                        }
                        let description = weatherDescriptions[code] || "Unknown";
                        document.getElementById("location").innerHTML = country
                        document.getElementById("weather").innerHTML = description
                        document.getElementById("temperature").innerHTML = dataWeather.current_weather.temperature + "°C"
                        document.getElementById("lat").innerHTML = latitude
                        document.getElementById("long").innerHTML = longitude
                        document.getElementById("icon").className = icon
                        let data_weather = JSON.parse(localStorage.getItem("weather") || "[]")
                        data_weather.push({
                            country: country,
                            temperature: dataWeather.current_weather.temperature,
                            code: dataWeather.current_weather.weathercode,
                            description: description,
                            isDay: isDay
                        })
                        localStorage.setItem("weather", JSON.stringify(data_weather))
                    })


            }
        })
} 
document.querySelector(".history").innerHTML += data_weather + "<br>";
