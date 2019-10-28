import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Search from './Components/Search'


class App extends Component{

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => (<Home />)}></Route>
            <Route exact path="/search" render={() => (<Search />)}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
