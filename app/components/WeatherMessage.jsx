var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        var message = "It is " + this.props.temp + " in " + this.props.location;
        return (
            <h2>{message}</h2>
        );
    }
});

module.exports = WeatherMessage;