import React from 'react';
import '../styles/App.css';
import FunComponent from '../components/函数组件.js';
import ClassComponent from '../components/class类组件.js';

function App() {
  const name = 'this is a react app'
  const element = <h1>{name}</h1>

  const element1 = React.createElement('h1', {className: 'title'}, '内容')
  /**
   * 上述通过React.creatElement方法创建的元素实际上创建了一个下面这样的对象，被称为React元素
   * const element1 = {
   *  type: 'h1',
   *  props: {
   *    className: 'title',
   *    children: '内容'
   *  }
   * }
   */
  return (
    <div className="App">
      <header className="App-header">
        {element}
      </header>
      <FunComponent name="Lucy"></FunComponent>
      <ClassComponent name="class组件是不是" increment="2"></ClassComponent>
      <footer>
        {element1}
      </footer>
    </div>
  );
}

export default App;
