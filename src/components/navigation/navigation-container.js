import React, { Component } from "react";
import { NavLink } from "react-router-dom"

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                </NavLink>

                <NavLink to="/gear-list" activeClassName="nav-link-active">
                    Gear List
                </NavLink>

                <NavLink to="/member-list" activeClassName="nav-link-active">
                    Member List
                </NavLink>
 
                {false ? <button>Issue/DeIssue</button> : null }
                {false ? <button>Add Gear</button> : null }
                {false ? <button>Add Member</button> : null }
            </div>
        )
    }
}
