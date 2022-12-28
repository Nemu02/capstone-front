import React, { Component } from 'react'

export default class IssueItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            id,
            issue_nomenclature,
            issue_nsn,
            issue_size,
            issue_note,
            issue_count,
        } = this.props.item;

        return (
            <div>
                <div className='issue-table'>
                    <table>
                        <tbody>
                            <tr className='issue-body'>
                                <th>{issue_nomenclature}</th>
                                <th>{issue_nsn}</th>
                                <th>{issue_size}</th>
                                <th>{issue_note}</th>
                                <th>{issue_count}</th>
                            </tr>
                        </tbody>
                    </table> 
                </div>
            </div>
        )
    }
    }
