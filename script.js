
document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        document.getElementById('weather-result').innerText = `Fetching weather for ${city}... (Functionality to be implemented)`;
    } else {
        document.getElementById('weather-result').innerText = 'Please enter a city name.';
    }
});
