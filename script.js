console.log("this works")
// 10c6fffd5a31380166d4a84098313e1e


function searchCity() {

    let queryUrl="https://api.openweathermap.org/data/2.5/weather?q=New York&appid=10c6fffd5a31380166d4a84098313e1e"


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