import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit(event) {
        console.log("submit", event)
        event.preventDefault();
    }
    render() {
        return (
        <div>
            <h1>Secure Login for RMIS</h1>
            
            <form onSubmit={this.handleSubmit}>
                DevilDog's Email
                <input 
                    type="email" 
                    name='email'
                    placeholder='Your email'
                    value={(this.state.email)}
                    onChange={this.handleChange}
                />

                Password
                <input 
                    type="password"
                    name='password' 
                    placeholder='Your password'
                    value={(this.state.password)}
                    onChange={this.handleChange}
                
                />

                <div>
                    <button type='submit'>OOrah!</button>
                </div>

            </form>
        </div>
        )
    }
}
