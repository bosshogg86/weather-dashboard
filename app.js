$( document ).ready(function() {
    
    $.ajax({
        url: 'api.openweathermap.org/data/2.5/weather?q={city name}&appid=c82e07f31254ca48265cc271c0642dc7',
        method: 'GET',
    }).then(function(response) {
      console.log(response);
    });

  });

