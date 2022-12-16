import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import GearList from './pages/gear-list';
import MemberList from './pages/member-list';
import GearDetail from './gear/gear-detail';
import NoMatch from "./pages/no-match";


export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gear-list" component={GearList} />
              <Route path="/member-list" component={MemberList} />
              <Route 
                exact 
                path="/gear/:slug" 
                component={GearDetail} 
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
