var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=43b66e9fc904ffb942db410a396978e6&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
                .then(function(res) {
                  if(res.data.cod && res.data.message) {
                    throw new Error('Unable to fetch weather');
                  } else {
                    return res.data.main.temp;
                  }
                })
                .catch(function(error) {
                  throw new Error(error.response.data.message);
                });
  }
};
