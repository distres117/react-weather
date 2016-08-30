var axios = require('axios');

const OPEN_WEATHERMAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dedea2ca5d29020c50a20a8471cdfabb&units=imperial'

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHERMAP_URL}&q=${encodedLocation}`;
        return axios.get(requestUrl)
        .then(function(res){
            debugger;
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message)
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        })
    }
}