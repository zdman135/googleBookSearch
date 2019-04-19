import React, { Component } from 'react';

class NoMatch extends Component {
    render() {
        return(
            <div className="ui message">
                <div className="header">
                    <h1>404</h1>
                </div>
                <p>Page not found!</p>
            </div>
        );
    }
}

export default NoMatch;