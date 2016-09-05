var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap'),
    ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false,
            errorMessage:  undefined
        };
    },
    componentDidMount: function(){
        var location = this.props.location.query.location;
        if (location && location.length){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;
        if (location && location.length){
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function () {
        var {location, temp, isLoading, errorMessage} = this.state;
        function renderMessage(){
            if (isLoading)
                return <h3 className="text-center">Fetching weather...</h3>
            else if (temp && location)
                return <WeatherMessage location={location} temp={temp}/>
        }
        function renderError(){
            if (typeof errorMessage ==='string'){
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    },
    handleSearch: function(location){
        var self = this;
        self.setState({
            isLoading:true,
            errorMessage: undefined,
            location:undefined,
            temp:undefined
        });
        openWeatherMap.getTemp(location)
        .then(function(temp){
            self.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(e){
            self.setState({
                isLoading:false,
                errorMessage: e.message
            });
        });
    }
});

module.exports = Weather;