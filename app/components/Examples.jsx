var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to check out</p>
            <ol>
                <li>
                    <Link to='/?location=Brooklyn'>Brooklyn, NY</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio De Janiro, Brazil</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;