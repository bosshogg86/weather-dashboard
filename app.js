$( document ).ready(function() {
  
  let cityName = 'Napa'
  
  const APIKey = 'c82e07f31254ca48265cc271c0642dc7'
  const queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey + '&units=imperial';

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
      console.log(response);
    });

  });

