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
            phone_num: "",
            editMode: false,
            apiUrl: "https://capstone-back.herokuapp.com/member/add",
            apiAction: 'post'

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        if (Object.keys(this.props.memberToEdit).length > 0) {
            const {
                id,
                name,
                edipi,
                email,
                phone_num
                // gear_img
            } = this.props.memberToEdit;

            this.props.clearMemberformToEdit();

            this.setState({
                id: id,
                name: name || "",
                edipi: edipi || "",
                email: email || "",
                phone_num: phone_num || "",
                editMode: true,
                apiUrl: `https://capstone-back.herokuapp.com/member/edit/${id}`,
                apiAction: 'put'
                // gear_img
            })
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    handleSubmit(event) {
        axios({
            url: this.state.apiUrl,
            method: this.state.apiAction,
            headers: { "Content-Type": "application/json"},
            data: JSON.stringify({
                name: this.state.name,
                edipi: this.state.edipi,
                email: this.state.email,
                phone_num: this.state.phone_num
            })
        }).then(response => {
            if (this.state.editMode) {
                this.props.handleEditFormSubmit();
            }else {
                this.props.handleGoodFormSubmit(response.data)
            }
            this.setState({ 
                name: "",
                edipi: "",
                email: "",
                phone_num: "",
                editMode: false,
                apiUrl: "https://capstone-back.herokuapp.com/member/add",
                apiAction: 'post'
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
