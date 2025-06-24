const apiKey = "735d00f165950a8e83e59a4c0a07cb95"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        const { main, weather, name } = data;
        resultDiv.innerHTML = `
          <h2>Weather in ${name}</h2>
          <p><strong>Temperature:</strong> ${main.temp}°C</p>
          <p><strong>Humidity:</strong> ${main.humidity}%</p>
          <p><strong>Condition:</strong> ${weather[0].main}</p>
        `;
      } else {
        resultDiv.innerHTML = `<p>City not found!</p>`;
      }
    })
    .catch(() => {
      resultDiv.innerHTML = `<p>Error fetching weather data.</p>`;
    });
}
