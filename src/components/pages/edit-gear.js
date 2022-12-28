import React, { Component } from 'react';
import axios from 'axios'

import GearSidebar from "../gear/gear-sidebar";
import GearForm from "../gear/gear-form";
axios.defaults.headers.delete['Content-Type'] = 'application/json', 'text/html';

export default class EditGear extends Component {
  constructor() {
    super()

    this.state= {
      gearItems: [],
      gearToEdit: {}
    } 

    this.handleGoodFormSubmit = this.handleGoodFormSubmit.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleBadFormSubmit = this.handleBadFormSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearGearformToEdit = this.clearGearformToEdit.bind(this)

  }

  clearGearformToEdit() {
    this.setState({
      gearToEdit: {}
    })
  }

  handleEditClick(gearItem) {
    this.setState({
      gearToEdit: gearItem
    })
  }

  handleDeleteClick(gearItem) {
    axios.delete(`https://capstone-back.herokuapp.com/gear/delete/${gearItem.id}`
    ).then(response => {
      this.setState({
        gearItems: this.state.gearItems.filter(item => {
          return item.id !== gearItem.id
        })  
      })

      return response.data
    }).catch(error => {
      console.log("error", error)
    })
  }

  handleGoodFormSubmit(gearItem) {
    this.setState({
      gearItems: [gearItem].concat(this.state.gearItems)
    })
  }

  handleEditFormSubmit() {
    this.getGearItems();
  }


  handleBadFormSubmit(error) {
    console.log("handlebadsumbit error", error)
  }

  getGearItems() {
    axios.get("https://capstone-back.herokuapp.com/gear/get"
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
            handleEditFormSubmit={this.handleEditFormSubmit}
            handleBadFormSubmit={this.handleBadFormSubmit}
            clearGearformToEdit={this.clearGearformToEdit}
            gearToEdit={this.state.gearToEdit}
          />
        </div>

        <div className='edit-gear-right'>
          <GearSidebar 
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.gearItems}
          />
        </div>
      </div>
    )
  }
}
