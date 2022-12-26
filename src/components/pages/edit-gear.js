import React, { Component } from 'react';
import axios from 'axios'

import GearSidebar from "../gear/gear-sidebar";
import GearForm from "../gear/gear-form";
axios.defaults.headers.delete['Content-Type'] = 'application/json', 'text/html';

export default class EditGear extends Component {
  constructor() {
    super()

    this.state= {
      gearItems: []
    }

    this.handleGoodFormSubmit = this.handleGoodFormSubmit.bind(this);
    this.handleBadFormSubmit = this.handleBadFormSubmit.bind(this);
  }

  

  handleGoodFormSubmit(gearItem) {
    this.setState({
      gearItems: [gearItem].concat(this.state.gearItems)
    })
  }


  handleBadFormSubmit(error) {
    console.log("handlebadsumbit error", error)
  }

  getGearItems() {
    axios.get("http://127.0.0.1:5000/gear/get"
    ).then(response => {
      this.setState({
        gearItems: [...response.data]
      })
    }).catch(error => {
      console.log("error in getGearItems", error)
    })
  }

  componentDidMount() {
    this.getGearItems();
  }

  render() {
    return (
      <div className='edit-gear-wrapper'>
        <div className='edit-gear-left'>
          <GearForm 
            handleGoodFormSubmit={this.handleGoodFormSubmit}
            handleBadFormSubmit={this.handleBadFormSubmit}
          />
        </div>

        <div className='edit-gear-right'>
          <GearSidebar 
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.gearItems}
          />
        </div>
      </div>
    )
  }
}
