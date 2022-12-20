import React, { Component } from "react";
import axios from 'axios';

import GearItem from "./gear-item"

export default class GearContainer  extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Welcome to my Capstone Project",
            isLoading: false,
            data: []
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    getGearItems() {
        axios
          .get("http://127.0.0.1:5000/gear/get")
          .then(response => {
            this.setState({
                data: response.data
            })
          })
          .catch(error => {
            console.log(error);
          });
      }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    gearItems() {
        return this.state.data.map(item => {
            console.log("item data", item)
            return(
                <GearItem 
                    key={item.id} 
                    item={item}
                />
            )
        })
    }

    componentDidMount() {
        this.getGearItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading . . .</div>
        }
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={() => this.handleFilter('cold-weather')}>Cold Weather</button>
                <button onClick={() => this.handleFilter('hot-weather')}>Hot Weather</button>
                <button onClick={() => this.handleFilter('combat')}>Combat</button>
                
                <div className="gear-items-wrapper">
                    {this.gearItems()}
                </div>
            </div>
        )
    }
}