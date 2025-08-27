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
  0:  { day: "meteocons-day-sunny",               night: "meteocons-night-clear" },
  1:  { day: "meteocons-day-sunny-overcast",      night: "meteocons-night-alt-partly-cloudy" },
  2:  { day: "meteocons-day-cloudy",              night: "meteocons-night-alt-cloudy" },
  3:  { day: "meteocons-cloudy",                  night: "meteocons-cloudy" },
  45: { day: "meteocons-fog",                     night: "meteocons-fog" },
  48: { day: "meteocons-fog",                     night: "meteocons-fog" },
  51: { day: "meteocons-sprinkle",                night: "meteocons-sprinkle" },
  53: { day: "meteocons-sprinkle",                night: "meteocons-sprinkle" },
  55: { day: "meteocons-sprinkle",                night: "meteocons-sprinkle" },
  56: { day: "meteocons-hail",                    night: "meteocons-hail" },
  57: { day: "meteocons-hail",                    night: "meteocons-hail" },
  61: { day: "meteocons-rain",                    night: "meteocons-rain" },
  63: { day: "meteocons-rain",                    night: "meteocons-rain" },
  65: { day: "meteocons-rain",                    night: "meteocons-rain" },
  66: { day: "meteocons-rain-mix",                night: "meteocons-rain-mix" },
  67: { day: "meteocons-rain-mix",                night: "meteocons-rain-mix" },
  71: { day: "meteocons-snow",                    night: "meteocons-snow" },
  73: { day: "meteocons-snow",                    night: "meteocons-snow" },
  75: { day: "meteocons-snow",                    night: "meteocons-snow" },
  77: { day: "meteocons-snow",                    night: "meteocons-snow" },
  80: { day: "meteocons-showers",                 night: "meteocons-showers" },
  81: { day: "meteocons-showers",                 night: "meteocons-showers" },
  82: { day: "meteocons-showers",                 night: "meteocons-showers" },
  85: { day: "meteocons-snow-wind",               night: "meteocons-snow-wind" },
  86: { day: "meteocons-snow-wind",               night: "meteocons-snow-wind" },
  95: { day: "meteocons-thunderstorm",            night: "meteocons-thunderstorm" },
  96: { day: "meteocons-thunderstorm",            night: "meteocons-thunderstorm" },
  99: { day: "meteocons-thunderstorm",            night: "meteocons-thunderstorm" }
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
                        document.getElementById("icon")
                        let data_weather = JSON.parse(localStorage.getItem("weather") || "[]")
                        data_weather.push({
                            country: country,
                            temperature: dataWeather.current_weather.temperature,
                            code: dataWeather.current_weather.weathercode,
                            description: description,
                            isDay: dataWeather.current_weather.is_day
                        })
                        localStorage.setItem("weather", JSON.stringify(data_weather))
                    })


            }
        })
} 
