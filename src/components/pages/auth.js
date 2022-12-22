import React, { Component } from 'react';
import Login from '../auth/login';
import authLoginImage from "../../../static/assets/background/auth.jpg";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleGoodAuth = this.handleGoodAuth.bind(this);
        this.handleBadAuth = this.handleBadAuth.bind(this);
    }

    handleGoodAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleBadAuth() {
        this.props.handleUnSuccessfulLogin();
    }

    render() {
        return (
        <div className='auth-page-wrapper'>
            <div className='auth-left-side'>
                <Login 
                    handleGoodAuth={this.handleGoodAuth}
                    handleBadAuth={this.handleBadAuth}
                />
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
