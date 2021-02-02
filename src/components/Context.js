import React, { Component } from 'react';

/**
 * Context设计目的是为了共享那些对于一个组件树而言是"全局"的数据
 */

// class App extends Component {
//     render () {
//         return <Toolbar theme="dark" />
//     }
// }

// function Toolbar (props) {
//     return (
//         <div>
//             <ThemedButton theme={props.theme}></ThemedButton>
//         </div>
//     )
// }

// class ThemedButton extends Component {
//     render () {
//         return <Button theme={this.props.theme}></Button>
//     }
// }
// 上述例子中theme属性通过层层传递才传到Button组件上
// 使用context，我们可以避免通过中间元素传递props


// Context可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树
// 为当前的theme创建一个context（"light"为默认值）
// const ThemeContext = React.createContext('light');
// class App extends Component {
//     render () {
//         return (
//             <ThemeContext.Provider value="dark">
//                 <Toolbar />
//             </ThemeContext.Provider>
//         )
//     }
// }

// function Toolbar() {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     )
// }

// class ThemedButton extends Component {
//     // 指定 contextType 读取当前的 theme context
//     // React 会往上找到最近的 theme Provider, 然后使用它的值
//     // 在这个例子中，当前的theme值为 "dark"
//     static contextType = ThemeContext;
//     render() {
//         return <button>{this.context}</button>
//     }

//     componentWillMount() {
//         console.log('%ccomponentWillMount', 'font-size: 36px;color:red', this.context)
//     }

//     componentDidMount() {
//         console.log('%ccomponentDidMount', 'font-size: 36px;color:green', this.context)
//     }
// }

const MyContext = React.createContext('lucy');
// context对象接受一个名为displayName的property 类型为字符串。React DevTools使用该字符串来确定context要显示的内容
MyContext.displayName = 'MyDisplayName';

class App extends Component {
    // render() {
    //     return (
    //         <MyContext.Provider value="Jack">
    //             <MyContext.Consumer>
    //                 {/* 基于context值进行渲染   这些需要函数作为子元素这种做法。这个函数接收当前的context值，返回一个React节点
    //                     传递给函数的value值等同于往上组件树离这个context最近的Provider提供的value值。如果没有对应的Provider,
    //                     value参数等同于传递给createContext()的defaultValue
    //                 */}
    //                 {my => <h1>{my}</h1>}  
    //             </MyContext.Consumer>
    //         </MyContext.Provider>
    //     )
    // }

    /**
     * context对象接受一个名为displayName的property 类型为字符串。React DevTools使用该字符串来确定context要显示的内容
     */
    render() {
        return (
            <MyContext.Provider>

            </MyContext.Provider>
        )
    }
}

// 动态Context

export default App;