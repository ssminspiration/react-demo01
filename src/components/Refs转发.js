import React, { Component } from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
))

export default class App extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
    }
    render() {
        return (
            <FancyButton ref={this.ref}>Click me!</FancyButton>
        )
    }

    componentDidMount() {
        console.log('this.ref', this.ref, this.ref.current)
    }
}


// 在高阶组件中转发Refs

// function logProps(wrappedComponent) {
//     class LogProps extends Component {
//         componentDidUpdate(prevProps) {
//             console.log('old props:', prevProps);
//             console.log('new props:', this.props);
//         }

//         render() {
//             return <wrappedComponent {...this.props} />
//         }
//     }

//     return LogProps;
// }
