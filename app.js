$( document ).ready(function() {
  
  // let cityName = '';
  let userSearch = [];
  // let cityName = '';
  const $cityName = $('#search-box');
  const APIKey = 'c82e07f31254ca48265cc271c0642dc7';
  // const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
  // const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;
  // const uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`; 

  
  
  // Sets SF to default city
  init();

  function init() {
  cityName = 'San Francisco';
  const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
  const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;
  
  // Default city name call
    $.ajax({
      url: cityURL,
      method: 'GET',
    }).then(function(cityData) {
      console.log(cityData);
      const lat = cityData.coord.lat;
      const lon = cityData.coord.lon;
      const uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;
      
      // Nested default UV call 
      $.ajax({
        url: uvURL,
        method: 'GET',
      }).then(function(uvData) {
        console.log(uvData);
        $('.city-card').empty();
        const $cityName = $('<h3>').text(cityData.name);
        const $temp = $('<p>').text('Temp: ' + cityData.main.temp + '°F');
        const $humidity = $('<p>').text('Humidity: ' + cityData.main.humidity + '%');
        const $speed = $('<p>').text('Wind Speed: ' + cityData.wind.speed + ' MPH');
        const $uv = $('<p>').text('UV Index: ' + uvData.value);
        $('.city-card').append($cityName, $temp, $humidity, $speed, $uv);
      });
    });

    // Default 5 day call
    $.ajax({
      url: fiveDayURL,
      method: 'GET',
    }).then(function(fiveDayData) {
      $('.weather-card').empty();
      const day1Date = $('<h5>').text(fiveDayData.list[4].dt_txt.slice(5, 10));
      const day2Date = $('<h5>').text(fiveDayData.list[12].dt_txt.slice(5, 10));
      const day3Date = $('<h5>').text(fiveDayData.list[20].dt_txt.slice(5, 10));
      const day4Date = $('<h5>').text(fiveDayData.list[28].dt_txt.slice(5, 10));
      const day5Date = $('<h5>').text(fiveDayData.list[36].dt_txt.slice(5, 10));
      const day1Temp = $('<p>').text('Temp: ' + fiveDayData.list[4].main.temp_max + '°F');
      const day2Temp = $('<p>').text('Temp: ' + fiveDayData.list[12].main.temp_max + '°F');
      const day3Temp = $('<p>').text('Temp: ' + fiveDayData.list[20].main.temp_max + '°F');
      const day4Temp = $('<p>').text('Temp: ' + fiveDayData.list[28].main.temp_max + '°F');
      const day5Temp = $('<p>').text('Temp: ' + fiveDayData.list[36].main.temp_max + '°F');
      const day1Humid = $('<p>').text('Humidity: ' + fiveDayData.list[4].main.humidity + '%');
      const day2Humid = $('<p>').text('Humidity: ' + fiveDayData.list[12].main.humidity + '%');
      const day3Humid = $('<p>').text('Humidity: ' + fiveDayData.list[20].main.humidity + '%');
      const day4Humid = $('<p>').text('Humidity: ' + fiveDayData.list[28].main.humidity + '%');
      const day5Humid = $('<p>').text('Humidity: ' + fiveDayData.list[36].main.humidity + '%');
      $('#day1').append(day1Date, day1Temp, day1Humid);
      $('#day2').append(day2Date, day2Temp, day2Humid);
      $('#day3').append(day3Date, day3Temp, day3Humid);
      $('#day4').append(day4Date, day4Temp, day4Humid);
      $('#day5').append(day5Date, day5Temp, day5Humid);
      console.log(fiveDayData);
      $cityName.val('');
    });
  }  



  // Search Box sets city
  $('#search-button').click(function(){
    event.preventDefault();
    cityName = $cityName.val();
    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
    const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=imperial`;
    
    // City name call
    $.ajax({
      url: cityURL,
      method: 'GET',
    }).then(function(cityData) {
      console.log(cityData);
      const lat = cityData.coord.lat;
      const lon = cityData.coord.lon;
      const uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`;
      
      // Nested UV call 
      $.ajax({
        url: uvURL,
        method: 'GET',
      }).then(function(uvData) {
        console.log(uvData);
        $('.city-card').empty();
        const $cityName = $('<h3>').text(cityData.name);
        const $temp = $('<p>').text('Temp: ' + cityData.main.temp + '°F');
        const $humidity = $('<p>').text('Humidity: ' + cityData.main.humidity + '%');
        const $speed = $('<p>').text('Wind Speed: ' + cityData.wind.speed + ' MPH');
        const $uv = $('<p>').text('UV Index: ' + uvData.value);
        $('.city-card').append($cityName, $temp, $humidity, $speed, $uv);
      });
    });

    // 5 day call
    $.ajax({
      url: fiveDayURL,
      method: 'GET',
    }).then(function(fiveDayData) {
      $('.weather-card').empty();
      const day1Date = $('<h5>').text(fiveDayData.list[4].dt_txt.slice(5, 10));
      const day2Date = $('<h5>').text(fiveDayData.list[12].dt_txt.slice(5, 10));
      const day3Date = $('<h5>').text(fiveDayData.list[20].dt_txt.slice(5, 10));
      const day4Date = $('<h5>').text(fiveDayData.list[28].dt_txt.slice(5, 10));
      const day5Date = $('<h5>').text(fiveDayData.list[36].dt_txt.slice(5, 10));
      const day1Temp = $('<p>').text('Temp: ' + fiveDayData.list[4].main.temp_max + '°F');
      const day2Temp = $('<p>').text('Temp: ' + fiveDayData.list[12].main.temp_max + '°F');
      const day3Temp = $('<p>').text('Temp: ' + fiveDayData.list[20].main.temp_max + '°F');
      const day4Temp = $('<p>').text('Temp: ' + fiveDayData.list[28].main.temp_max + '°F');
      const day5Temp = $('<p>').text('Temp: ' + fiveDayData.list[36].main.temp_max + '°F');
      const day1Humid = $('<p>').text('Humidity: ' + fiveDayData.list[4].main.humidity + '%');
      const day2Humid = $('<p>').text('Humidity: ' + fiveDayData.list[12].main.humidity + '%');
      const day3Humid = $('<p>').text('Humidity: ' + fiveDayData.list[20].main.humidity + '%');
      const day4Humid = $('<p>').text('Humidity: ' + fiveDayData.list[28].main.humidity + '%');
      const day5Humid = $('<p>').text('Humidity: ' + fiveDayData.list[36].main.humidity + '%');
      $('#day1').append(day1Date, day1Temp, day1Humid);
      $('#day2').append(day2Date, day2Temp, day2Humid);
      $('#day3').append(day3Date, day3Temp, day3Humid);
      $('#day4').append(day4Date, day4Temp, day4Humid);
      $('#day5').append(day5Date, day5Temp, day5Humid);
      console.log(fiveDayData);
      $cityName.val('');
    });


  });

  });

 
  //   let cityName = 'San Francisco';
  //   const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=` + cityName + '&appid=' + APIKey + '&units=imperial';
  //   const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={your api key}&units=imperial`;
  //   const uvURL = `http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}`;
    
  


  