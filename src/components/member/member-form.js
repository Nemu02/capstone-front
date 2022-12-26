import React, { Component } from 'react';
import axios from 'axios';

// import MemberPnumber from './member-pnumber';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default class MemberForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            edipi: "",
            email: "",
            phone_num: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios.post('http://127.0.0.1:5000/member/add', 
            JSON.stringify({
                name: this.state.name,
                edipi: this.state.edipi,
                email: this.state.email,
                phone_num: this.state.phone_num
            })
        )
        .then(response => {
            this.props.handleGoodFormSubmit(response.data)
            this.setState({ 
                name: "",
                edipi: "",
                email: "",
                phone_num: ""
            })
            console.log("response", response)
        }).catch(error => {
            console.log("handleSubmit error", error)
        })
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <h1>MemberForm</h1>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder='Member Name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="number"
                            name="edipi"
                            placeholder='EDIPI'
                            value={this.state.edipi}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        {/* <MemberPnumber /> */}
                        <input
                            type="number"
                            name="phone_num"
                            placeholder='contact#'
                            value={this.state.phone_num}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div>
                    <button type='submit'>Add Member</button>
                </div>
            </form>

        </div>
        )
    }
}
