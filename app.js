$(document).ready(function () {
  let userInputs = [];

  const $cityName = $("#search-box");
  const APIKey = "c82e07f31254ca48265cc271c0642dc7";

  // Set stored or default city
  init();

  // Save search term
  function storeInput() {    
    userInputs = JSON.parse(localStorage.getItem("userInput")) || [];
    let set =new Set(userInputs)
    set.add(cityName)
    const toArr=Array.from(set)
    localStorage.setItem("userInput",JSON.stringify(toArr))
    // userInputs.push(cityName);
    // console.log(userInputs);
    // localStorage.setItem("userInput", JSON.stringify(userInputs));
  }

  // Render saved search terms
  function renderInputs() {
    $(".history").empty();
      userInputs = [];
      const savedInputs = JSON.parse(localStorage.getItem("userInput"));
      userInputs.push(...savedInputs);
      userInputs.forEach(function(cityName) {
      const userInput = $("<li>");
      userInput.text(cityName);
      userInput.addClass("list-group-item");
      userInput.attr("value", cityName);
      $(".history").append(userInput);
    });
  }

  // Sets default city to stored search, if none SF default
  function init() {
    if (localStorage.getItem("userInput")) {
      const savedInputs = JSON.parse(localStorage.getItem("userInput"));
      userInputs.push(...savedInputs);
      console.log(userInputs);
      cityName = userInputs[userInputs.length - 1];
    } else {
      cityName = "San Francisco";
    }

    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
    const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;

    // Default city name call
    $.ajax({
      url: cityURL,
      method: "GET",
    }).then(function (cityData) {
      console.log(cityData);
      const iconCode = cityData.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
      const lat = cityData.coord.lat;
      const lon = cityData.coord.lon;
      const uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;

      // Nested default UV call
      $.ajax({
        url: uvURL,
        method: "GET",
      }).then(function (uvData) {
        console.log(uvData);
        $(".city-card").empty();
        const $cityName = $("<h3>").text(cityData.name);
        const $cityImg = $("<img>").attr("src", iconURL);
        $cityImg.addClass("city-icon");
        const $temp = $("<p>").text("Temp: " + cityData.main.temp + "°F");
        const $humidity = $("<p>").text(
          "Humidity: " + cityData.main.humidity + "%"
        );
        const $speed = $("<p>").text(
          "Wind Speed: " + cityData.wind.speed + " MPH"
        );
        const $uv = $("<p>").text("UV Index: " + uvData.value);
        $(".city-card").append(
          $cityName,
          $cityImg,
          $temp,
          $humidity,
          $speed,
          $uv
        );
      });
    });

    // Default 5 day call
    $.ajax({
      url: fiveDayURL,
      method: "GET",
    }).then(function (fiveDayData) {
      console.log(fiveDayData);
      $(".weather-card").empty();
      const day1Date = $("<h5>").text(fiveDayData.list[4].dt_txt.slice(5, 10));
      const day2Date = $("<h5>").text(fiveDayData.list[12].dt_txt.slice(5, 10));
      const day3Date = $("<h5>").text(fiveDayData.list[20].dt_txt.slice(5, 10));
      const day4Date = $("<h5>").text(fiveDayData.list[28].dt_txt.slice(5, 10));
      const day5Date = $("<h5>").text(fiveDayData.list[36].dt_txt.slice(5, 10));
      const day1IconCode = fiveDayData.list[4].weather[0].icon;
      const day2IconCode = fiveDayData.list[12].weather[0].icon;
      const day3IconCode = fiveDayData.list[20].weather[0].icon;
      const day4IconCode = fiveDayData.list[28].weather[0].icon;
      const day5IconCode = fiveDayData.list[36].weather[0].icon;
      const day1IconURL = `http://openweathermap.org/img/w/${day1IconCode}.png`;
      const day2IconURL = `http://openweathermap.org/img/w/${day2IconCode}.png`;
      const day3IconURL = `http://openweathermap.org/img/w/${day3IconCode}.png`;
      const day4IconURL = `http://openweathermap.org/img/w/${day4IconCode}.png`;
      const day5IconURL = `http://openweathermap.org/img/w/${day5IconCode}.png`;
      const day1Img = $("<img>").attr("src", day1IconURL);
      const day2Img = $("<img>").attr("src", day2IconURL);
      const day3Img = $("<img>").attr("src", day3IconURL);
      const day4Img = $("<img>").attr("src", day4IconURL);
      const day5Img = $("<img>").attr("src", day5IconURL);
      const day1Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[4].main.temp_max + "°F"
      );
      const day2Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[12].main.temp_max + "°F"
      );
      const day3Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[20].main.temp_max + "°F"
      );
      const day4Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[28].main.temp_max + "°F"
      );
      const day5Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[36].main.temp_max + "°F"
      );
      const day1Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[4].main.humidity + "%"
      );
      const day2Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[12].main.humidity + "%"
      );
      const day3Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[20].main.humidity + "%"
      );
      const day4Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[28].main.humidity + "%"
      );
      const day5Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[36].main.humidity + "%"
      );
      $("#day1").append(day1Date, day1Img, day1Temp, day1Humid);
      $("#day2").append(day2Date, day2Img, day2Temp, day2Humid);
      $("#day3").append(day3Date, day3Img, day3Temp, day3Humid);
      $("#day4").append(day4Date, day4Img, day4Temp, day4Humid);
      $("#day5").append(day5Date, day5Img, day5Temp, day5Humid);
      renderInputs();
    });
  }

  // Search history click
  $(".list-group").click(function (event) {
    // console.log(event.target.getAttribute('value'));
    cityName = event.target.getAttribute("value");
    console.log(cityName);
    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
    const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;
    // City name call
    $.ajax({
      url: cityURL,
      method: "GET",
    }).then(function (cityData) {
      console.log(cityData);
      const iconCode = cityData.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
      const lat = cityData.coord.lat;
      const lon = cityData.coord.lon;
      const uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;

      // Nested UV call
      $.ajax({
        url: uvURL,
        method: "GET",
      }).then(function (uvData) {
        console.log(uvData);
        $(".city-card").empty();
        const $cityName = $("<h3>").text(cityData.name);
        const $cityImg = $("<img>").attr("src", iconURL);
        $cityImg.addClass("city-icon");
        const $temp = $("<p>").text("Temp: " + cityData.main.temp + "°F");
        const $humidity = $("<p>").text(
          "Humidity: " + cityData.main.humidity + "%"
        );
        const $speed = $("<p>").text(
          "Wind Speed: " + cityData.wind.speed + " MPH"
        );
        const $uv = $("<p>").text("UV Index: " + uvData.value);
        $(".city-card").append(
          $cityName,
          $cityImg,
          $temp,
          $humidity,
          $speed,
          $uv
        );
      });
    });

    // 5 day call
    $.ajax({
      url: fiveDayURL,
      method: "GET",
    }).then(function (fiveDayData) {
      console.log(fiveDayData);
      $(".weather-card").empty();
      const day1Date = $("<h5>").text(fiveDayData.list[4].dt_txt.slice(5, 10));
      const day2Date = $("<h5>").text(fiveDayData.list[12].dt_txt.slice(5, 10));
      const day3Date = $("<h5>").text(fiveDayData.list[20].dt_txt.slice(5, 10));
      const day4Date = $("<h5>").text(fiveDayData.list[28].dt_txt.slice(5, 10));
      const day5Date = $("<h5>").text(fiveDayData.list[36].dt_txt.slice(5, 10));
      const day1IconCode = fiveDayData.list[4].weather[0].icon;
      const day2IconCode = fiveDayData.list[12].weather[0].icon;
      const day3IconCode = fiveDayData.list[20].weather[0].icon;
      const day4IconCode = fiveDayData.list[28].weather[0].icon;
      const day5IconCode = fiveDayData.list[36].weather[0].icon;
      const day1IconURL = `http://openweathermap.org/img/w/${day1IconCode}.png`;
      const day2IconURL = `http://openweathermap.org/img/w/${day2IconCode}.png`;
      const day3IconURL = `http://openweathermap.org/img/w/${day3IconCode}.png`;
      const day4IconURL = `http://openweathermap.org/img/w/${day4IconCode}.png`;
      const day5IconURL = `http://openweathermap.org/img/w/${day5IconCode}.png`;
      const day1Img = $("<img>").attr("src", day1IconURL);
      const day2Img = $("<img>").attr("src", day2IconURL);
      const day3Img = $("<img>").attr("src", day3IconURL);
      const day4Img = $("<img>").attr("src", day4IconURL);
      const day5Img = $("<img>").attr("src", day5IconURL);
      const day1Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[4].main.temp_max + "°F"
      );
      const day2Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[12].main.temp_max + "°F"
      );
      const day3Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[20].main.temp_max + "°F"
      );
      const day4Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[28].main.temp_max + "°F"
      );
      const day5Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[36].main.temp_max + "°F"
      );
      const day1Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[4].main.humidity + "%"
      );
      const day2Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[12].main.humidity + "%"
      );
      const day3Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[20].main.humidity + "%"
      );
      const day4Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[28].main.humidity + "%"
      );
      const day5Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[36].main.humidity + "%"
      );
      $("#day1").append(day1Date, day1Img, day1Temp, day1Humid);
      $("#day2").append(day2Date, day2Img, day2Temp, day2Humid);
      $("#day3").append(day3Date, day3Img, day3Temp, day3Humid);
      $("#day4").append(day4Date, day4Img, day4Temp, day4Humid);
      $("#day5").append(day5Date, day5Img, day5Temp, day5Humid);
      renderInputs();
      $cityName.val("");
    });
  });

  // Search Box sets city
  $("#search-button").click(function () {
    event.preventDefault();
    cityName = $cityName.val();
    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
    const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;
    // City name call
    $.ajax({
      url: cityURL,
      method: "GET",
    }).then(function (cityData) {
      console.log(cityData);
      const iconCode = cityData.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/w/${iconCode}.png`;
      const lat = cityData.coord.lat;
      const lon = cityData.coord.lon;
      const uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;

      // Nested UV call
      $.ajax({
        url: uvURL,
        method: "GET",
      }).then(function (uvData) {
        console.log(uvData);
        $(".city-card").empty();
        const $cityName = $("<h3>").text(cityData.name);
        const $cityImg = $("<img>").attr("src", iconURL);
        $cityImg.addClass("city-icon");
        const $temp = $("<p>").text("Temp: " + cityData.main.temp + "°F");
        const $humidity = $("<p>").text(
          "Humidity: " + cityData.main.humidity + "%"
        );
        const $speed = $("<p>").text(
          "Wind Speed: " + cityData.wind.speed + " MPH"
        );
        const $uv = $("<p>").text("UV Index: " + uvData.value);
        $(".city-card").append(
          $cityName,
          $cityImg,
          $temp,
          $humidity,
          $speed,
          $uv
        );
      });
    });

    // 5 day call
    $.ajax({
      url: fiveDayURL,
      method: "GET",
    }).then(function (fiveDayData) {
      console.log(fiveDayData);
      $(".weather-card").empty();
      const day1Date = $("<h5>").text(fiveDayData.list[4].dt_txt.slice(5, 10));
      const day2Date = $("<h5>").text(fiveDayData.list[12].dt_txt.slice(5, 10));
      const day3Date = $("<h5>").text(fiveDayData.list[20].dt_txt.slice(5, 10));
      const day4Date = $("<h5>").text(fiveDayData.list[28].dt_txt.slice(5, 10));
      const day5Date = $("<h5>").text(fiveDayData.list[36].dt_txt.slice(5, 10));
      const day1IconCode = fiveDayData.list[4].weather[0].icon;
      const day2IconCode = fiveDayData.list[12].weather[0].icon;
      const day3IconCode = fiveDayData.list[20].weather[0].icon;
      const day4IconCode = fiveDayData.list[28].weather[0].icon;
      const day5IconCode = fiveDayData.list[36].weather[0].icon;
      const day1IconURL = `http://openweathermap.org/img/w/${day1IconCode}.png`;
      const day2IconURL = `http://openweathermap.org/img/w/${day2IconCode}.png`;
      const day3IconURL = `http://openweathermap.org/img/w/${day3IconCode}.png`;
      const day4IconURL = `http://openweathermap.org/img/w/${day4IconCode}.png`;
      const day5IconURL = `http://openweathermap.org/img/w/${day5IconCode}.png`;
      const day1Img = $("<img>").attr("src", day1IconURL);
      const day2Img = $("<img>").attr("src", day2IconURL);
      const day3Img = $("<img>").attr("src", day3IconURL);
      const day4Img = $("<img>").attr("src", day4IconURL);
      const day5Img = $("<img>").attr("src", day5IconURL);
      const day1Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[4].main.temp_max + "°F"
      );
      const day2Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[12].main.temp_max + "°F"
      );
      const day3Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[20].main.temp_max + "°F"
      );
      const day4Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[28].main.temp_max + "°F"
      );
      const day5Temp = $("<p>").text(
        "Temp: " + fiveDayData.list[36].main.temp_max + "°F"
      );
      const day1Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[4].main.humidity + "%"
      );
      const day2Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[12].main.humidity + "%"
      );
      const day3Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[20].main.humidity + "%"
      );
      const day4Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[28].main.humidity + "%"
      );
      const day5Humid = $("<p>").text(
        "Humidity: " + fiveDayData.list[36].main.humidity + "%"
      );
      $("#day1").append(day1Date, day1Img, day1Temp, day1Humid);
      $("#day2").append(day2Date, day2Img, day2Temp, day2Humid);
      $("#day3").append(day3Date, day3Img, day3Temp, day3Humid);
      $("#day4").append(day4Date, day4Img, day4Temp, day4Humid);
      $("#day5").append(day5Date, day5Img, day5Temp, day5Humid);
      storeInput();
      renderInputs();
      $cityName.val("");
    });
  });
});
