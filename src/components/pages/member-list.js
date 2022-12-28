import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MemberContainer from '../member/member-container';

class MemberList extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <MemberContainer />
    )
  }
}

export default MemberList;