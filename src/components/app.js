import React, { Component } from 'react';

import NavigationContainer from './navigation/navigation-container';
import logo from "../../static/assets/logo/logo22.png"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-container'>
          <div className='left'>
            <NavigationContainer />
          </div>

          <div className='center'>
            <h1>R.M.G.I.S</h1>
            <div>Random Millitary Gear Issuing System</div>
          </div>

          <div className='right'>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}
