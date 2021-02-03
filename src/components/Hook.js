import React, { useState, useEffect } from 'react';

function Example() {
    // 声明一个新的叫做 count 的state变量
    const [count, setCount] = useState(0);
    console.log('useState', useState(0));

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Example;

/**
 * hook是一些可以让你在函数组件里“钩入”React state及生命周期等特性的函数。Hook不能在class组件中使用
 */
