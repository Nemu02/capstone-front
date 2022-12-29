import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IssueSidebarList = (props) => {
    const issueList = props.data.map(issueItem => {
        return (
            <div key={issueItem.id}>
                <div className='issue-table'>
                    <table>
                        <tbody>
                            <tr className='issue-body'>
                                <th>{issueItem.issue_nomenclature}</th>
                                <th>{issueItem.issue_nsn}</th>
                                <th>{issueItem.issue_size}</th>
                                <th>{issueItem.issue_note}</th>
                                <th>{issueItem.issue_count}</th>
                            </tr>
                        </tbody>
                    </table>
                    <a onClick={() => props.handleDeleteClick(issueItem)}>
                    <FontAwesomeIcon icon='delete-left' />
                    </a> 
                </div>
            </div>
        )
    })

    return (
        <div>{issueList}</div>
    )
}

export default IssueSidebarList;