import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GearItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gearItemClass: ""
        }
    }

    handleMouseEnter() {
        this.setState({
            gearItemClass: 'image-blur'
        })
    }

    handleMouseLeave() {
        this.setState({
            gearItemClass: ''
        })
    }

    render() {
    const { id, nomenclature, gear_img, category } = this.props.item;

        return (
            <div className="gear-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div
                    className={"gear-img-background " + this.state.gearItemClass}
                    style={{
                        backgroundImage: "url(" + gear_img + ")"
                    }}
                />

                <div className="text-wrapper">
                    <div className="txt-container">
                        <div>
                            {nomenclature}  
                        </div> 

                        <div>
                            {category}
                        </div>
                    </div>
                </div>
                {/* <Link to={`/gear/${id}`}>Link</Link> */}
            </div>
        )
    }
}