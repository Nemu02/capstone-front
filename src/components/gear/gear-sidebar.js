import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GearSidebar = (props) => {
    const gearList = props.data.map(gearItem => {
        return (
            <div key={gearItem.id}>
                <h3>{gearItem.nomenclature } ({gearItem.size})</h3>
                <h4>{gearItem.nsn}</h4>
                {/* <img src={gearItem.gear_img}></img> */}
 
                <div>

                    <a className='actions' onClick={() => props.handleEditClick(gearItem)}>
                       <FontAwesomeIcon icon="file-pen" /> 
                    </a>

                    <a className='actions' onClick={() => props.handleDeleteClick(gearItem)}>
                        <FontAwesomeIcon icon="delete-left"/>
                    </a>
                </div>


                <hr style={{color: "brown"}}/>
            </div>
        )
    })

    return (
        <div>{gearList}</div>
    )
}

export default GearSidebar;