import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

import NavBar from "./components/NavBar/NavBar";
import JumboTron from "./components/JumboTron/JumboTron"

function App() {
  return(
    <Router>
      <div className="pushable">
        <div className="ui inverted vertical masthead center aligned segment">
        <Switch>
          <Route exact path="/" render={() => <NavBar link="search" />} />
          <Route exact path="/saved" render={() => <NavBar link="saved" />} />
          <Route render={() => <NavBar link="noMatch" />} />

        </Switch>
            <JumboTron />
        </div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
