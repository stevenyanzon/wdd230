const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=1685117&units=imperial&appid=425daefc2ef0dbf9c29999e6a305ad26";

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  document.getElementById("current").textContent = jsObject.weather[0].description;
  document.getElementById("temp").textContent = jsObject.main.temp_max;
  document.getElementById("humidity").textContent = jsObject.main.humidity;
  document.getElementById("speed").textContent = jsObject.wind.speed;

  const temp = parseFloat(document.querySelector("#temp").textContent);
  const speed = parseFloat(document.querySelector("#speed").textContent);

  const wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

  let windChill = Math.floor(wc);


  if(speed > 3 && temp <= 50){
    let wTemp = isNaN(temp);
    let wSpeed = isNaN(speed);
    if(wTemp === "True" || wSpeed === "True"){
        document.querySelector("#chill").innerHTML = `N/A`;
    }else{
        document.querySelector("#chill").innerHTML = `${windChill}`; 
    }
  }else {
    document.querySelector("#chill").innerHTML = `N/A`;
  }

});

const forecastURL ="https://api.openweathermap.org/data/2.5/forecast?id=1685117&units=imperial&appid=425daefc2ef0dbf9c29999e6a305ad26";

fetch(forecastURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);

    const list = forecast.list;

    let daysforeCast = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].dt_txt.includes("18:00:00")) {
        daysforeCast.push(list[i]);
      };
    };

    function convertDate(dt) {
      const milisecs = dt * 1000;
      const dateObject = new Date(milisecs);
      const days = dateObject.toLocaleString("default", {weekday: "short"});
      return days;
    }
    //forecast days
    document.getElementById("day1").textContent = convertDate(daysforeCast[0].dt);
    document.getElementById("day2").textContent = convertDate(daysforeCast[1].dt);
    document.getElementById("day3").textContent = convertDate(daysforeCast[2].dt);
    

    //temperature
    document.getElementById("data1").textContent = `${daysforeCast[0].main.temp}°F`;
    document.getElementById("data2").textContent = `${daysforeCast[1].main.temp}°F`;
    document.getElementById("data3").textContent = `${daysforeCast[2].main.temp}°F`;
    

    //weather icon
    const weatherIcon = "https://openweathermap.org/img/w/";
    document.getElementById("image1").setAttribute("src", `${weatherIcon}${daysforeCast[0].weather[0].icon}.png`);
    document.getElementById("image2").setAttribute("src", `${weatherIcon}${daysforeCast[1].weather[0].icon}.png`);
    document.getElementById("image3").setAttribute("src", `${weatherIcon}${daysforeCast[2].weather[0].icon}.png`);
    

    //forecast description
    document.getElementById("image1").setAttribute("alt", daysforeCast[0].weather[0].description);
    document.getElementById("image2").setAttribute("alt", daysforeCast[1].weather[0].description);
    document.getElementById("image3").setAttribute("alt", daysforeCast[2].weather[0].description);
  });

