import React, { Component } from "react";

import GearItem from "./gear-item"

export default class GearContainer  extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Welcome to my Capstone Project",
            isLoading: false,
            data: [
                {title: "CW Cap", category: 'coldWeather', slug: 'cw-cap'}, 
                {title: "CW Gloves", category: 'coldWeather', slug: 'cw-gloves'}, 
                {title: 'HW Boots', category: 'hotWeather', slug: 'hw-boots'}, 
                {title: "ECH", category: 'combat', slug: 'ech'}
            ]
        }

        this.handleFilter = this.handleFilter.bind(this);

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
            return <GearItem title={item.title} url={'yomama.com'} slug={item.slug}/>;
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading . . .</div>
        }
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={() => this.handleFilter('coldWeather')}>coldWeather</button>
                <button onClick={() => this.handleFilter('hotWeather')}>hotWeather</button>
                <button onClick={() => this.handleFilter('combat')}>combat</button>

                {this.gearItems()}
            </div>
        )
    }
}