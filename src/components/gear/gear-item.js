import React from "react";
import { Link } from "react-router-dom";

export default function(props) {

    const { id, nomenclature, gear_img, category } = props.item;

    return (
        <div className="gear-item-wrapper">
            <div
                className="gear-img-background"
                style={{
                    backgroundImage: "url(" + gear_img + ")"
                }}
            />
            <div>{nomenclature}</div>
            <div>{category}</div>
            <Link to={`/gear/${id}`}>Link</Link>
        </div>
    )
}