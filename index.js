const apiKey = "9f52bbe0cba185cee0f8d53a28a87966";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchForm = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`City not found: ${city}`);
        }

        const data = await response.json();
        console.log(data); 
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    } catch (error) {
        console.error(error); 
        alert(error.message); 
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const city = searchInput.value.trim(); 
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
