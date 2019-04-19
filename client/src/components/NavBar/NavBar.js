import React, {Component} from 'react';
import './NavBar';

class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: props.link
    }
  }

  render() {
    return(
      <div className="ui container">
      <div className="ui large secondary inverted pointing menu">

      {this.state.active === "noMatch" ? (
          <div className="ui container">
          <a href="/" className="item">Search</a> <a href="/saved" className="item">Saved</a>        
    </div>) :

      this.state.active === "search" ? (
        <div className="ui container">
          <a href="/" className="active item">Search</a> <a href="/saved" className="item">Saved</a>        
        </div>      
              ) : (
                <div className="ui container">
                  <a href="/" className="item">Search</a> <a href="/saved" className="active item">Saved</a>        
                </div>
              )

      }

      </div>
    </div>

    );
  }

}

export default NavBar;