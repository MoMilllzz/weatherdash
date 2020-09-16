console.log("this works")
// 10c6fffd5a31380166d4a84098313e1e

function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");4
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);

    const APIKey ="10c6fffd5a31380166d4a84098313e1e"
    
function searchCity() {

    let queryUrl="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;


    $.ajax({
        type:"GET", 
        url: queryUrl 
    }) .then(function(response){
        console.log(response)
        let temp=response.main.temp 
        let humidity=response.main.humidity
        let windSpeed=response.wind.speed
        $("#display-weather").append("Temperature: "+temp + "<br>", "Humidity: "+humidity + "<br>", "Wind Speed: "+windSpeed)
    })
}

searchCity()