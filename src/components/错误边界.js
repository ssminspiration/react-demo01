import React, { Component } from 'react';

/*
    错误边界是一种React组件，这种组件可以捕获并打印发生在其子组件树任何位置的Javascript错误，并且，它会渲染出备用UI
    而不是渲染那些崩溃了的子组件树。
*/

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

// 可以将上述ErrorBOundary组件作为一个常规组件使用

<ErrorBoundary>
    <MyWidget />
</ErrorBoundary>