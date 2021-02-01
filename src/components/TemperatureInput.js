import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class TemperatureInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            temperature: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    render () {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    type="text"
                    value={this.state.temperature}
                    onChange={this.handleChange}/>
            </fieldset>
        )
    }
}