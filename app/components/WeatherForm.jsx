var React = require('react');

var WeatherForm = React.createClass({
    render: function(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location"/>
                <button type="submit">Submit</button>
            </form>
        )
    },
    onFormSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }
})

module.exports = WeatherForm;