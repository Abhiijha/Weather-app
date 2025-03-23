const appId = "7c176e4cc13ee6753dae8bd52a43e673";
const appUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weatherDetails=document.querySelector(".weather-details");
weatherDetails.style.display="none";

async function checkWeather(city) {
    let result = await fetch(appUrl + city + `&appId=${appId}`);
    let view = await result.json();
    console.log(view)

    if (view.cod == "404") {
        document.querySelector(".error").style.display = "block";
        weatherDetails.style.display="none";
       

    }
    else {
        
        weatherDetails.style.display="flex";
        document.querySelector(".details h1").innerHTML = Math.round(view.main.temp) + "°C";
        document.querySelector(".details h2").innerHTML = view.name;
        document.querySelector(".humidity h4").innerHTML = view.main.humidity + "%";
        document.querySelector(".wind h4").innerHTML = view.wind.speed + "km/h";
        if(view.weather[0].main=="Snow"){
            document.querySelector(".details img").src="images/snow.png";
        }else if(view.weather[0].main=="Clouds"){
            document.querySelector(".details img").src="images/clouds.png";
        }
        else if(view.weather[0].main=="Drizzle"){
            document.querySelector(".details img").src="images/drizzle.png";
        
        }else if(view.weather[0].main=="Mist"){
            document.querySelector(".details img").src="images/mist.png";
        
        }else if(view.weather[0].main=="Rain"){
            document.querySelector(".details img").src="images/rain.png";
        }
        else{
            document.querySelector(".details img").src="images/clear.png";
        }
    }




}
let btn = document.querySelector(".container button");
let input = document.querySelector(".container input");
btn.addEventListener('click', () => {
    checkWeather(input.value);
})


