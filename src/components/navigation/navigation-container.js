import React, { Component } from "react";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button>Home</button>
                <button>Gear List</button>
                <button>Issue/DeIssue</button>
                <button>Add Members</button>
            </div>
        )
    }
}
