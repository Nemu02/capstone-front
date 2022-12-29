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

    getGearItems(filter = null) {
        axios
          .get("https://capstone-back.herokuapp.com/gear/get")
          .then(response => {
            if (filter) {
                this.setState({
                    data: response.data.filter(item => {
                        return item.category === filter;
                    })
                })
    
            }else {
                this.setState({
                    data: response.data
                })
            }
          })
          .catch(error => {
            console.log(error);
          });
      }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTER") {
            this.getGearItems();
        }else {
            this.getGearItems(filter);
        }
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
            <div className="gear-page">
                <div className="filter-links">
                    <button onClick={() => this.handleFilter('cold-weather')}>Cold Weather</button>
                    <button onClick={() => this.handleFilter('hot-weather')}>Hot Weather</button>
                    <button onClick={() => this.handleFilter('combat')}>Combat</button>
                    <button onClick={() => this.handleFilter('CLEAR_FILTER')}>ALL</button>
                </div>

                <div className="gear-items-wrapper">
                    {this.gearItems()}
                </div>
            </div>
        )
    }
}