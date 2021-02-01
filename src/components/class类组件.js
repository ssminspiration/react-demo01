import React from 'react';

export default class classComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        };
    }
    render () {
        return <div>
            <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            <p>counter的值: {this.state.counter}</p>
        </div>
    }

    tick () {
        this.setState({
            date: new Date(),
        })

        // this.setState({
        //     counter: this.state.counter + Number(this.props.increment)
        // })

        // setState接收一个函数作为参数（箭头函数）
        // this.setState((state, props) => {
        //     return {
        //         counter: state.counter + Number(props.increment) 
        //     }
        // })

        // setState接收一个普通函数作为参数
        // this.setState(function (state, props) {
        //     return {
        //         counter: state.counter + Number(props.increment)
        //     }
        // })
    }

    componentDidMount () {
        // 组件被挂载到DOM上运行之后
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount () {
        // 清除定时器
        clearInterval(this.timerId);
    }
}