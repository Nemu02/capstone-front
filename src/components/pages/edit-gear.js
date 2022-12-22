import axios from 'axios'
import React, { Component } from 'react'

export default class EditGear extends Component {
  constructor() {
    super()

    this.state= {
      gearItems: []
    }

  }

  getGearItems() {
    axios.get("http://127.0.0.1:5000/gear/get"
    ).then(response => {
      console.log("response from getGearItems", response)
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
          <h1>HI</h1>
        </div>

        <div className='edit-gear-right'>
          <h1>HI</h1>
        </div>
      </div>
    )
  }
}
