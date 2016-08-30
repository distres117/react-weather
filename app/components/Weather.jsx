var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    render: function () {
        var {location, temp, isLoading} = this.state;
        function renderMessage(){
            if (isLoading)
                return <h3>Fetching weather...</h3>
            else if (temp && location)
                return <WeatherMessage location={location} temp={temp}/>
        }
        return (
            <div>
                <h2>Weather component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    },
    handleSearch: function(location){
        var self = this;
        self.setState({isLoading:true});
        openWeatherMap.getTemp(location)
        .then(function(temp){
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage){
            self.setState({isLoading:false});
            alert(errorMessage);
        });
    }
});

module.exports = Weather;