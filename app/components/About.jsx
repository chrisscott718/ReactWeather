var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is just a simple weather app. It hooks up and pulls data from <a href="http://openweathermap.org/" target="_blank">Open Weather Map</a>. The application is built on <a href="https://facebook.github.io/react" target="_blank">React</a>.
      </p>
    </div>
  );
};

module.exports = About;
