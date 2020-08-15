$( document ).ready(function() {
  
  // let cityName = '';
  
  const APIKey = 'c82e07f31254ca48265cc271c0642dc7'
  // const cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

  

  // Sets SF to default city
  init();

  function init() {
    let cityName = 'San Francisco';
    const cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
    const fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
    
    // default city name call
    $.ajax({
      url: cityURL,
      method: 'GET',
    }).then(function(response) {
      $('.city-card').empty();
      const $cityName = $('<h3>').text(response.name);
      const $temp = $('<p>').text('Temp: ' + response.main.temp + '°F');
      const $humidity = $('<p>').text('Humidity: ' + response.main.humidity + '%');
      const $speed = $('<p>').text('Wind Speed: ' + response.wind.speed + ' MPH');
      $('.city-card').append($cityName, $temp, $humidity, $speed);
    });

    //default city 5 day call
    $.ajax({
      url: fiveDayURL,
      method: 'GET',
    }).then(function(response) {
      $('.weather-card').empty();
      const day1Date = $('<h5>').text(response.list[0].dt_txt.slice(5, 10));
      const day2Date = $('<h5>').text(response.list[8].dt_txt.slice(5, 10));
      const day3Date = $('<h5>').text(response.list[16].dt_txt.slice(5, 10));
      const day4Date = $('<h5>').text(response.list[24].dt_txt.slice(5, 10));
      const day5Date = $('<h5>').text(response.list[32].dt_txt.slice(5, 10));
      const day1Temp = $('<p>').text('Temp: ' + response.list[0].main.temp + '°F');
      const day2Temp = $('<p>').text('Temp: ' + response.list[8].main.temp + '°F');
      const day3Temp = $('<p>').text('Temp: ' + response.list[16].main.temp + '°F');
      const day4Temp = $('<p>').text('Temp: ' + response.list[24].main.temp + '°F');
      const day5Temp = $('<p>').text('Temp: ' + response.list[32].main.temp + '°F');
      const day1Humid = $('<p>').text('Humidity: ' + response.list[0].main.humidity + '%');
      const day2Humid = $('<p>').text('Humidity: ' + response.list[8].main.humidity + '%');
      const day3Humid = $('<p>').text('Humidity: ' + response.list[16].main.humidity + '%');
      const day4Humid = $('<p>').text('Humidity: ' + response.list[24].main.humidity + '%');
      const day5Humid = $('<p>').text('Humidity: ' + response.list[32].main.humidity + '%');

      $('#day1').append(day1Date, day1Temp, day1Humid);
      $('#day2').append(day2Date, day2Temp, day2Humid);
      $('#day3').append(day3Date, day3Temp, day3Humid);
      $('#day4').append(day4Date, day4Temp, day4Humid);
      $('#day5').append(day5Date, day5Temp, day5Humid);
      // const
      // const
      console.log(response);
    });
  } 

  // Search Box sets city
  $('#search-button').click(function(){
    event.preventDefault();
    let cityName = $('#search-box').val().trim();
    const cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
    const fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

    // City name call
    $.ajax({
      url: cityURL,
      method: 'GET',
    }).then(function(response) {
      console.log(response);
      $('.city-card').empty();
      const $cityName = $('<h3>').text(response.name);
      const $temp = $('<p>').text('Temp: ' + response.main.temp + '°F');
      const $humidity = $('<p>').text('Humidity: ' + response.main.humidity + '%');
      const $speed = $('<p>').text('Wind Speed: ' + response.wind.speed + 'MPH');
      $('.city-card').append($cityName, $temp, $humidity, $speed);
    });

    // 5 day call
    $.ajax({
      url: fiveDayURL,
      method: 'GET',
    }).then(function(response) {
      $('.weather-card').empty();
      const day1Date = $('<h5>').text(response.list[0].dt_txt.slice(5, 10));
      const day2Date = $('<h5>').text(response.list[8].dt_txt.slice(5, 10));
      const day3Date = $('<h5>').text(response.list[16].dt_txt.slice(5, 10));
      const day4Date = $('<h5>').text(response.list[24].dt_txt.slice(5, 10));
      const day5Date = $('<h5>').text(response.list[32].dt_txt.slice(5, 10));
      const day1Temp = $('<p>').text('Temp: ' + response.list[0].main.temp + '°F');
      const day2Temp = $('<p>').text('Temp: ' + response.list[8].main.temp + '°F');
      const day3Temp = $('<p>').text('Temp: ' + response.list[16].main.temp + '°F');
      const day4Temp = $('<p>').text('Temp: ' + response.list[24].main.temp + '°F');
      const day5Temp = $('<p>').text('Temp: ' + response.list[32].main.temp + '°F');
      const day1Humid = $('<p>').text('Humidity: ' + response.list[0].main.humidity + '%');
      const day2Humid = $('<p>').text('Humidity: ' + response.list[8].main.humidity + '%');
      const day3Humid = $('<p>').text('Humidity: ' + response.list[16].main.humidity + '%');
      const day4Humid = $('<p>').text('Humidity: ' + response.list[24].main.humidity + '%');
      const day5Humid = $('<p>').text('Humidity: ' + response.list[32].main.humidity + '%');
      $('#day1').append(day1Date, day1Temp, day1Humid);
      $('#day2').append(day2Date, day2Temp, day2Humid);
      $('#day3').append(day3Date, day3Temp, day3Humid);
      $('#day4').append(day4Date, day4Temp, day4Humid);
      $('#day5').append(day5Date, day5Temp, day5Humid);
      console.log(response);
    });


  });

  });

 