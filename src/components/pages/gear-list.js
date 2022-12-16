import React, { Component}from 'react';
import { Link } from "react-router-dom";
import GearContainer from '../gear/gear-container';

export default class GearList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Gear List</h2>

        <GearContainer />

        {/* shows list of gear witha dropdown filter */}
        {/* add form for new gear */}
  
        <div>
          <Link to="/member-list">Select a Member</Link>
        </div>
  
      </div>
    )

  }
}
