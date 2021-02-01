import React, { Component } from 'react';

export default class EventComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id, e) {
        console.log('id', id)
        console.log('事件对象', e)
        this.setState((state) => {
            return {
                isToggleOn: !state.isToggleOn
            }
        })
    }

    handleClick2 (id, e) {
        console.log('id & e', id, e)
        this.setState((state) => {
            return {
                isToggleOn: !state.isToggleOn
            }
        })
    }
    
    // ES6的实验性语法
    // handleClick = () => {
    //     this.setState((state) => {
    //         return {
    //             isToggleOn: !state.isToggleOn
    //         }
    //     })
    // }

    render () {
        return (
            <div className="eventTest">
                <button onClick={this.handleClick.bind(this, 'hh')}>
                    {this.state.isToggleOn ? 'ON': 'OFF'}
                </button>

                <button onClick={(e) => this.handleClick2('iddd', e)}>
                    箭头函数绑定this传参
                </button>
            </div>
        )
    }
}