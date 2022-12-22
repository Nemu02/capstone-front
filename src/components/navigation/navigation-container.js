import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import navLogo from "../../../static/assets/logo/logo22.png"

const NavigationContainer = (props) => {

    return (
        <div className="navigation-wrapper">
            <div className="nav-left">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/gear-list" activeClassName="nav-link-active">
                        Gear List
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/edit-gear" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="pen-to-square" />
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/member-list" activeClassName="nav-link-active">
                        Member List
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/edit-member" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="pen-to-square" />
                    </NavLink>
                </div>

                {false ? <button>Issue/DeIssue</button> : null }
                {false ? <button>Add Gear</button> : null }
                {false ? <button>Add Member</button> : null }
            </div>

            <div className="nav-center">
                <h1>R.M.G.I.S</h1>
                <h4>Random Millitary Gear Issue System</h4>
            </div>

            <div className="nav-right">
                <img src={navLogo} alt='Logo' />
            </div>
        </div>
    )
    
}

export default NavigationContainer;
