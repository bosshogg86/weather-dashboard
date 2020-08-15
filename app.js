$( document ).ready(function() {
  
  // let cityName = '';
  
  const APIKey = 'c82e07f31254ca48265cc271c0642dc7'
  // const cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

  
  init();

  function init() {
    let cityName = 'San Francisco';
    const cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
    const fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
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

    $.ajax({
      url: fiveDayURL,
      method: 'GET',
    }).then(function(response) {
      $('.weather-card').empty();
      $('#day1').text(response.list[0].dt_txt.slice(5, 10));
      $('#day2').text(response.list[8].dt_txt.slice(5, 10));
      $('#day3').text(response.list[16].dt_txt.slice(5, 10));
      $('#day4').text(response.list[24].dt_txt.slice(5, 10));
      $('#day5').text(response.list[32].dt_txt.slice(5, 10));
      // const
      // const
      console.log(response.list[0].dt_txt);
    });

  } 

  
  $('#search-button').click(function(){
    event.preventDefault();
    let cityName = $('#search-box').val().trim();
    const cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
    const fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
    console.log(cityName);
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
    $.ajax({
      url: fiveDayURL,
      method: 'GET',
    }).then(function(response) {
      $('#five-day-cards').empty();
      console.log(response);
      console.log(response.list[8].main.temp);
    });


  });

  });

 