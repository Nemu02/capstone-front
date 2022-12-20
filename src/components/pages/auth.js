import React, { Component } from 'react';
import Login from '../auth/login';
import authLoginImage from "../../../static/assets/background/auth.jpg";

export default class Auth extends Component {
  render() {
    return (
      <div className='auth-page-wrapper'>
        <div className='auth-left-side'>
            <Login />
        </div>

        <div 
            className='auth-right-side' 
            style={{
                backgroundImage: `url(${authLoginImage})`
            }}
        
        />

        

      </div>
    )
  }
}
