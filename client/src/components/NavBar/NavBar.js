import React from 'react';
import './NavBar';

function NavBar() {
    return(
      <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <a href="/" className="active item">Search</a>
        <a href="/saved" className="item">Saved</a>
      </div>
    </div>
    );
}

export default NavBar;