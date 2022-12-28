import React, { Component } from "react";
import axios from 'axios';

import MemberInfoList from "./member-info-list"

export default class MemberContainer  extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Welcome to my Capstone Project",
            isLoading: false,
            data: []
        }

    }

    getMemberItems() {
        axios
          .get("https://capstone-back.herokuapp.com/member/get")
          .then(response => {
            this.setState({
                data: response.data
            })
          })
          .catch(error => {
            console.log(error);
          });
      }


    memberInfoLists() {
        return this.state.data.map(member => {
            console.log("member data", member)
            return(
                <MemberInfoList 
                    key={member.id} 
                    member={member}
                />
            )
        })
    }

    componentDidMount() {
        this.getMemberItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading . . .</div>
        }
        return (
            
            <div className="gear-items-wrapper">

                {this.memberInfoLists()}
            </div>
        )
    }
}