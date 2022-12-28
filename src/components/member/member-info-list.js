import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                            <Link to={`/i/${id}`}>
                                {name} 
                            </Link>
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