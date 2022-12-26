import React from 'react';

const GearSidebar = (props) => {
    const gearList = props.data.map(gearItem => {
        return (
            <div key={gearItem.id}>
                <h3>{gearItem.nomenclature } ({gearItem.size})</h3>
                <h4>{gearItem.nsn}</h4>
                {/* <img src={gearItem.gear_img}></img> */}
                <a onClick={() => props.handleDeleteClick(gearItem)}>
                    Delete
                </a>

                <hr style={{color: "brown"}}/>
            </div>
        )
    })

    return (
        <div>{gearList}</div>
    )
}

export default GearSidebar;