import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import axios from 'axios';
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import GearList from './pages/gear-list';
import EditGear from './pages/edit-gear';
import MemberList from './pages/member-list';
import EditMember from './pages/edit-member';
import GearDetail from './gear/gear-detail';
import IssueDetail from './pages/issue-detail';
import IssueForm from './issue/issue-form';
import Auth from './pages/auth';
import NoMatch from "./pages/no-match";
import Icons from './helpers/icons';


export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("http://127.0.0.1:8000/user/get", { 
      withCredentials: true 
    }).then(response => {
      const loggedIn = response.data;
      const loggedInStatus = this.state.loggedInStatus;

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      }else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      }else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGEDIN"
        });
      }
    })

  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div className='container'>

        <Router>
          <div>
            <NavigationContainer />

            {/* <h2>{this.state.loggedInStatus}</h2> */}

            <Switch>
              <Route exact path="/" component={Home} />

              <Route 
                path="/auth" 
                render={ props => (
                  <Auth 
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />
                )}
              />

              <Route path="/gear-list" component={GearList} />
              <Route path="/edit-gear" component={EditGear} />

              <Route path="/member-list" component={MemberList} />
              <Route path="/i/:slug" component={IssueDetail} />
              <Route path="/i/:slug" component={IssueForm} />
              <Route path="/edit-member" component={EditMember} />
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
