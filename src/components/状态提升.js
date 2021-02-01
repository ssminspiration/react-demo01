import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput.js'

function BoilingVerdict (props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

// 华氏度转成摄氏度
function toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 摄氏度转成华氏度
function toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32;
}

export default class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            temperature: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render () {
        return (
            <div>
                <TemperatureInput scale="c"></TemperatureInput>
                <TemperatureInput scale="f"></TemperatureInput>
            </div>
        )
    }
}