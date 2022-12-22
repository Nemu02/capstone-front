import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: '',
            errorText: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ''
        })
    }
    
    handleSubmit(event) {
        axios.post("http://127.0.0.1:8000/user/verify", 
        {
                email: this.state.email,
                password:this.state.password
        }, 
        { withCredentials: true}
        ).then(response => {
            if (response.data === "user verified") {
                console.log("Welcome Back")
                this.props.handleGoodAuth();
            } else {
                this.setState({
                    errorText: "Wrong Email/Password"
                });
                this.props.handleBadAuth();
            }
        }).catch(error => {
            console.log("error", error)
            this.setState({
                errorText: "An Error Occured!"
            });
            this.props.handleBadAuth();
        })
            
        // fetch("http://127.0.0.1:8000/user/verify", {
        //     method: "POST",
        //     headers: {"content-type": "application/json"},
        //     body: JSON.stringify({
        //         email: this.state.email,
        //         password: this.state.password
        //     })
        //     }).then(response => response.json())
        //     .then(data => {
        //         console.log("data", data)
        //         this.setState({
        //             errorText: "ummmm"
        //         })
        //     }).catch(error => {
        //         console.log("fetch error", error);
        //     })
        
        event.preventDefault();
    }
    render() {
        return (
        <div>
            <h1>Secure Login for RMIS</h1>
            
            <form onSubmit={this.handleSubmit}>
                <div>DevilDog's Email</div>  
                <input 
                    type="email" 
                    name='email'
                    placeholder='Your email'
                    value={(this.state.email)}
                    onChange={this.handleChange}
                />

                <div>Password</div>
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

            <div>
                {this.state.errorText}
            </div>
        </div>
        )
    }
}
