import axios from 'axios';
import React, { Component } from 'react'

export default class IssueForm extends Component {
    constructor(props) {
        super(props)

        this.state= {
            issue_nomenclature: '',
            issue_nsn: "",
            issue_size: "",
            issue_count: "",
            issue_note: "",
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
        axios.
            post(
                'http://127.0.0.1:5000/issue/add',
                JSON.stringify({
                    issue_nomenclature: this.state.issue_nomenclature,
                    member_id: this.state.member_id,
                    issue_count: this.state.issue_count,
                    issue_note: this.state.issue_note,
                    issue_nsn: this.state.issue_nsn,
                    issue_size: this.state.issue_size
                })
            ).then(response => {
                console.log("response", response)
            }).catch(error => {
                console.log('handleSubmit error', error)
            })
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <div>ISSUE FORM</div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type='text'
                                name='issue_nomenclature'
                                placeholder='Nomenclature'
                                value={this.state.issue_nomenclature}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <input
                                type='text'
                                name='member_id'
                                placeholder='member_id'
                                value={this.state.member_id}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <div>
                                <input
                                    type='text'
                                    name='issue_nsn'
                                    placeholder='nsn'
                                    value={this.state.issue_nsn}
                                    onChange={this.handleChange}
                                />
                            </div>
                            
                            <div>
                                <input
                                    type='text'
                                    name='issue_size'
                                    placeholder='size'
                                    value={this.state.issue_size}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type='text'
                                name='issue_count'
                                placeholder='count'
                                value={this.state.issue_count}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <button type='submit'>
                                Add Gear
                            </button>
                        </div>
                    </form>
                </div>

            </div>


        )
    }
}
