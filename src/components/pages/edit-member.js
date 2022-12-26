import React, { Component } from 'react';
import axios from 'axios'

import MemberSidebar from "../member/member-sidebar";
import MemberForm from "../member/member-form";

export default class EditMember extends Component {
  constructor() {
    super()

    this.state= {
      memberInfoLists: []
    }

    this.handleGoodFormSubmit = this.handleGoodFormSubmit.bind(this);
    this.handleBadFormSubmit = this.handleBadFormSubmit.bind(this);

  }

  handleGoodFormSubmit(memberInfoList) {
    this.setState({
      memberInfoLists: [memberInfoList].concat(this.state.memberInfoLists)
    })
  }

  handleBadFormSubmit(error) {
    console.log("handlebadsumbit error", error)
  }

  getMemberLists() {
    axios.get("http://127.0.0.1:5000/member/get"
    ).then(response => {
      this.setState({
        memberInfoLists: [...response.data]
      })
    }).catch(error => {
      console.log("error in getMemberLists", error)
    })
  }

  componentDidMount() {
    this.getMemberLists();
  }

  render() {
    return (
      <div className='edit-gear-wrapper'>
        <div className='edit-gear-left'>
          <MemberSidebar 
            data={this.state.memberInfoLists}

          />
        </div>

        <div className='edit-gear-right'>
          <MemberForm 
            handleGoodFormSubmit={this.handleGoodFormSubmit}
            handleBadFormSubmit={this.handleBadFormSubmit}

          />
        </div>
      </div>
    )
  }
}
