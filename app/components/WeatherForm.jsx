var React = require('react');

var WeatherForm = React.createClass({
    render: function(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="search" ref="location" placeholder="Search weather by city"/>
                <button className="button expanded hollow" type="submit">Submit</button>
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