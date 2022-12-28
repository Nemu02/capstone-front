import React, { Component } from 'react';
import axios from 'axios';

import IssueItem from '../issue/issue-item';
import IssueForm from '../issue/issue-form';
import IssueMemberId from '../issue/issue-member-id';

class IssueDetail extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            memberId: this.props.match.params.slug,
            issueMember: [],
            issueItem: []
        }
    }

    getIssueMember() {
        axios
            .get(
                `http://127.0.0.1:5000/member/get/${this.state.memberId}`
            ).then(response => {
                console.log("response member", response)

                this.setState({
                    issueMember: response.data
                });
            }).catch(error => {
                console.log("GETISSUE error", error)
            })
    }
    
    getIssueItem() {
        axios
            .get(
                `http://127.0.0.1:5000/member/get/${this.state.memberId}`
            ).then(response => {
                console.log("response all_issues", response.data.all_issues)
                this.setState({
                    issueItem: response.data.all_issues
                });
            }).catch(error => {
                console.log("GETISSUE error", error)
            })
    }

    componentDidMount() {
        this.getIssueMember();
        this.getIssueItem();
    }

    issueItems() {
        return this.state.issueItem.map(item => {
            console.log("issueitem", item)
            return(
                <div>
                    <IssueItem
                        key={item.id} 
                        item={item}
                    />
                </div>
                
            )
        })
    }



    render() {
        const {
            id,
            name,
            edipi,
        } = this.state.issueMember;
        return (
            <div>
                <div >
                    <h1>{name}</h1>
                    <h2>{id}</h2>
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
                        {this.issueItems()}
                    </div>

                    <div className='right'>
                        <IssueForm
                        />
                    </div>
                </div>
            </div>
        )
    }
    }

export default IssueDetail;
