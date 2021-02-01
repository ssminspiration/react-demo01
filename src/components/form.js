import React, { Component } from 'react';

export default class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /**
     * 受控组件
     * 在HTML中，表单元素（如 input 、textarea 、select）通常自己维护state,并根据用户输入进行更新。而在React中，可变状态通常保存在
     * 组件的state属性中，并且只能通过使用setState()来更新。这使得React的state成为唯一数据源。
     * 渲染表单的React组件还控制着用户输入过程中表单发生的操作。被React以这种方式控制取值的表单输入元素就叫做"受控组件"
     */

    handleChange (e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit (e) {
        alert('提交的名字:' + this.state.value)
        e.preventDefault();
    }

    render () {
        return (
            <div className="formWrapper">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字：
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}