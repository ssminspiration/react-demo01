import React, { Component } from 'react';
import Hook from '@/components/Hook.js'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <Hook />
            </div>
        )
    }
}