import React, { Component } from 'react';
import axios from 'axios'

import MemberSidebar from "../member/member-sidebar";
import MemberForm from "../member/member-form";

export default class EditMember extends Component {
  constructor() {
    super()
 
    this.state= {
      memberInfoLists: [],
      memberToEdit: {}
    }

    this.handleGoodFormSubmit = this.handleGoodFormSubmit.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleBadFormSubmit = this.handleBadFormSubmit.bind(this);
    this.handleDeleteMemberClick = this.handleDeleteMemberClick.bind(this);
    this.handleEditMemberClick = this.handleEditMemberClick.bind(this);
    this.clearMemberformToEdit = this.clearMemberformToEdit.bind(this);
  }

  clearMemberformToEdit() {
    this.setState({
      memberToEdit: {}
    })
  }

  handleEditMemberClick(memberInfoList) {
    this.setState({
      memberToEdit: memberInfoList
    })
  }

  handleDeleteMemberClick(memberInfoList) {
    axios.delete(`http://127.0.0.1:5000/member/delete/${memberInfoList.id}`
    )
    .then(response => {
      this.setState({
        memberInfoLists: this.state.memberInfoLists.filter(item => {
          return item.id !== memberInfoList.id
        })
      })

      return response.data
    }).catch(error => {
    console.log("error deletehandle", error)
    })
  }

  handleGoodFormSubmit(memberInfoList) {
    this.setState({
      memberInfoLists: [memberInfoList].concat(this.state.memberInfoLists)
    })
  }

  handleEditFormSubmit() {
    this.getMemberLists();
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
            handleEditMemberClick={this.handleEditMemberClick}
            handleDeleteMemberClick={this.handleDeleteMemberClick}
            data={this.state.memberInfoLists}

          />
        </div>

        <div className='edit-gear-right'>
          <MemberForm 
            clearMemberformToEdit={this.clearMemberformToEdit}
            memberToEdit={this.state.memberToEdit}
            handleGoodFormSubmit={this.handleGoodFormSubmit}
            handleEditFormSubmit={this.handleEditFormSubmit}
            handleBadFormSubmit={this.handleBadFormSubmit}

          />
        </div>
      </div>
    )
  }
}
