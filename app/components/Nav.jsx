var React = require('react'),
    {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
        return (
            <div>
                <h2>This is nav</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </div>
        );
    }
})

module.exports = Nav;