// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// fa1e72ff893c6a4a5ed4077327e855b4

const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

getWeatherBtn.addEventListener("click", () => {
    const cityName = cityInput.value.trim(); // "trim" removes whitespace from both ends of the string
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fa1e72ff893c6a4a5ed4077327e855b4&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(({ name, weather: [{ icon, description }], main: { temp, humidity }, wind: { speed } }) => {
            weatherResult.innerHTML = `
                <h2>Weather in ${name}
                    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}" />
                </h2>
                <p>Temperature: ${temp} °C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Description: ${description}</p>
                <p>🌬️ Wind: ${speed} м/с</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        })
})

// Home Work: 
// 1. Отобразить в weatherResult температуру, влажность и описание погоды.
// 2. Добавить обработку ошибок, чтобы отображать сообщение пользователю, если город не найден или произошла другая ошибка при запросе данных.

// 3. Добавить стилистику для приложения