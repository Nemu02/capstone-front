import React from 'react';
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h2>Gear List</h2>

      <div>
        <Link to="/member-list">Select a Member</Link>
      </div>

    </div>
  )
}
