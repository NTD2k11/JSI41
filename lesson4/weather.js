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
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
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
                        let description = weatherDescriptions[code] || "Unknown";
                        document.getElementById("location").innerHTML = country
                        document.getElementById("weather").innerHTML = description
                        document.getElementById("temperature").innerHTML = dataWeather.current_weather.temperature + "°C"
                        document.getElementById("lat").innerHTML = latitude
                        document.getElementById("long").innerHTML = longitude
                        localStorage.setItem("weather", JSON.stringify(dataWeather))
                    })


            }
        })
} 
