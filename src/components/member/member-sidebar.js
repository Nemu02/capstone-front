import React from 'react';

const MemberSidebar = (props) => {
    const memberSideList = props.data.map(memberInfoList => {
        return (
            <div>
                <h3>{memberInfoList.name } {memberInfoList.phone_num}</h3>
                <h4>{memberInfoList.email}</h4>

                <hr style={{color: "brown"}}/>
            </div>
        )
    })

    return (
        <div>{memberSideList}</div>
    )
}

export default MemberSidebar;