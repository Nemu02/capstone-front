import React from "react";
import { Link } from "react-router-dom";

export default function(props) {

    const { id, nomenclature, gear_img, category } = props.item;

    return (
        <div>
            <img src={gear_img} />
            <div>{category}</div>
            <div>{nomenclature}</div>
            <Link to={`/gear/${id}`}>Link</Link>
        </div>
    )
}