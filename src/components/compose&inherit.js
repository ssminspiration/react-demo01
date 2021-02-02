import React, { Component } from 'react';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacescraft
            </p>
        </FancyBorder>
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}

function Contacts() {
    return (
        <h1>Contacts Component</h1>
    )
}

function Chat() {
    return (
        <h1>Chat Component</h1>
    )
}

function App() {
    return (
        <SplitPane
            left={<Contacts />}
            right={<Chat />}>
        </SplitPane>
    )
}

export default App;
// export default WelcomeDialog;