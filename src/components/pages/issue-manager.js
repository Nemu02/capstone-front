import React, { Component } from 'react';
import axios from 'axios';
import JsPDF from 'jspdf';
import moment from 'moment/moment';

import IssueSidebarList from '../issue/issue-sidebar-list';
import IssueForm from "../issue/issue-form";

class IssueManager extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            memberId: this.props.match.params.slug,
            issueMember: [],
            issueItems: [],
            date: ""
        }

        this.handleGoodFormSubmit = this.handleGoodFormSubmit.bind(this);
        this.handleBadFormSubmit = this.handleBadFormSubmit.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.generatePDF = this.generatePDF.bind(this);

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
            issueItems: [issueItem].concat(this.state.issueItems),
            date: moment().format('MMMM do YYYY'),
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

    generatePDF = () => {

        const report = new JsPDF('landscape','pt','a4');
        report.html(document.querySelector('#print')).then(() => {
            report.save('IMR.pdf');
        });
    }

    render() {
        const {
            id,
            name,
            edipi,
            email,
            phone_num
        } = this.state.issueMember;

        return (
            <div>   
                <div className='issue-content'>

                        <div id='print' className='left'>

                            <div className='header'>
                                <div className='header-left'>
                                    <h1>{name}</h1>
                                    <h2>Member ID={id}</h2>
                                </div>

                                <div className='header-right'>
                            
                                    <h4>Email:{email} <br/> Edipi:{edipi} <br/> #Phone:{phone_num}</h4>
                                </div>
                            </div>
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
                            <div>
                                Date:{this.state.date}
                            </div>


                            <button onClick={this.generatePDF} type="button">Export PDF</button>
              
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
