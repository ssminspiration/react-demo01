import React, { Component } from 'react';

function World () {
    return (
        <h1>World Component</h1>
    )
}

export default class Hello extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isRender: false
        }
    }
    
    handleRender = () => {
        this.setState((state) => {
            return {
                isRender: true
            }
        })
    }

    handleDestory = () => {
        this.setState((state) => ({
            isRender: false
        }))
    }

    render () {
        return (
            <div className="helloWrapper">
                <button onClick={this.handleRender}>渲染</button>
                <button onClick={this.handleDestory}>销毁</button>
                {this.state.isRender && <World></World>}
            </div>
        )
    }
}