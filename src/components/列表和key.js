import React, { Component } from 'react';

export default class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lists: [
                {
                    name: 'jack',
                    hobby: 'table tennis',
                    id: 0
                },
                {
                    name: 'jack',
                    hobby: 'watching TV',
                    id: 1
                }
            ]
        }
    }

    render () {
        const lists = this.state.lists.map((item) => {
            return <li key={item.id}>姓名：{item.name}  爱好：{item.hobby}</li>
        })
        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
}