import React, { Component } from "react";

export default class MemberInfoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    const { id, name, edipi, email, phone_num } = this.props.member;

        return (
            <div className="member-list-wrapper">
                <div className="text-wrapper">
                    <div className="txt-container">
                        <div>
                            {name}  
                        </div> 

                        <div>
                            ({email})

                            <hr style={{color: "goldenrod"}}/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}