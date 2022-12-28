import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemberSidebar = (props) => {
    const memberSideList = props.data.map(memberInfoList => {
        return (
            <div key={memberInfoList.id}> 
                <h3>{memberInfoList.name } {memberInfoList.phone_num}</h3>
                <h4>{memberInfoList.email}</h4>

                <div>
                    <a onClick={() => props.handleEditMemberClick(memberInfoList)}>
                        <FontAwesomeIcon icon="user-pen"/>
                    </a>

                    <a onClick={() => props.handleDeleteMemberClick(memberInfoList)}>
                        <FontAwesomeIcon icon="user-xmark"/>
                    </a>

                </div>


                <hr style={{color: "brown"}}/>
            </div>
        )
    })

    return (
        <div>{memberSideList}</div>
    )
}

export default MemberSidebar;