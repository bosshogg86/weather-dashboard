$( document ).ready(function() {
  
  // let cityName = '';
  
  const APIKey = 'c82e07f31254ca48265cc271c0642dc7'
  // const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

  
  
  $('#search-button').click(function(){
    event.preventDefault();
    let cityName = $('#search-box').val().trim();
    const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';
    console.log(cityName);
    $.ajax({
      url: queryURL,
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
  });

  });

 