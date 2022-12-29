import React, { Component } from 'react';
import axios from 'axios';

import IssueSidebarList from '../issue/issue-sidebar-list';
import IssueForm from "../issue/issue-form";

class IssueManager extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            memberId: this.props.match.params.slug,
            issueMember: [],
            issueItems: []
        }

        this.handleGoodFormSubmit = this.handleGoodFormSubmit.bind(this);
        this.handleBadFormSubmit = this.handleBadFormSubmit.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)

    }

    handleDeleteClick(issueItem) {
        axios.delete(`https://capstone-back.herokuapp.com/issue/delete/${issueItem.id}`
        ).then(response => {
          this.setState({
            issueItems: this.state.issueItems.filter(item => {
              return item.id !== issueItem.id
            })  
          })
    
          return response.data
        }).catch(error => {
          console.log("error", error)
        })    }

    handleGoodFormSubmit(issueItem) {
        this.setState({
            issueItems: [issueItem].concat(this.state.issueItems)
        })
    }

    handleBadFormSubmit(error) {
        console.log("handlebadsumbit error", error)
    }

    getIssueMember() {
        axios
            .get(
                `https://capstone-back.herokuapp.com/member/get/${this.state.memberId}`
            ).then(response => {

                this.setState({
                    issueMember: response.data
                });
            }).catch(error => {
                console.log("GETISSUE error", error)
            })
    }

    getIssueItems() {
        axios
            .get(
                `https://capstone-back.herokuapp.com/member/get/${this.state.memberId}`
            ).then(response => {
                this.setState({
                    issueItems: [...response.data.all_issues]
                });
            }).catch(error => {
                console.log("GETISSUE error", error)
            })
    }

    componentDidMount() {
        this.getIssueMember();
        this.getIssueItems();
    }



    render() {
        const {
            id,
            name,
            edipi,
        } = this.state.issueMember;

        return (
            <div>
                <div>
                    <h1>{name}</h1>
                    <h2>Member ID{id}</h2>
                </div>

                <div className='issue-content'>
                        <div className='left'>
                            <div>
                                <table>
                                    <thead>
                                        <tr className='issue-head'>
                                            <th>Nomenclature</th>
                                            <th>NSN</th>
                                            <th>Size</th>
                                            <th>Note</th>
                                            <th>Count</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <IssueSidebarList 
                                handleDeleteClick={this.handleDeleteClick}
                                data={this.state.issueItems}

                            />
                        </div>

                        <div className='right'>
                            <IssueForm 
                                handleGoodFormSubmit={this.handleGoodFormSubmit}
                                handleBadFormSubmit={this.handleBadFormSubmit}
                            />
                        </div>
                    </div>
                </div>
        )
    }
}


export default IssueManager;
