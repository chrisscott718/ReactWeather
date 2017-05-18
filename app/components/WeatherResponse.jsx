var React = require('react');

var WeatherResponse = ({temp, location}) => {
  return(
    <h3 className="text-center">It is {temp} in {location}</h3>
  );
};

module.exports = WeatherResponse;
