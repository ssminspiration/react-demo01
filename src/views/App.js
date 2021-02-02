import React from 'react';
// import '../styles/App.css';
import '../styles/App.scss';
import FunComponent from '@/components/函数组件.js';
import ClassComponent from '@/components/class类组件.js';
import EventComponent from '@/components/事件处理.js';
import Hello from '@/components/条件渲染.js';
import List from '@/components/列表和key.js';
import Form from '@/components/form.js';
import Calculator from '@/components/状态提升.js';
import WelcomeDialog from '@/components/compose&inherit.js';
import Context from '@/components/Context.js';
import Refs from '@/components/Refs转发.js'

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
      <EventComponent></EventComponent>
      <Hello></Hello>
      <List></List>
      <Form></Form>
      <Calculator></Calculator>
      <WelcomeDialog></WelcomeDialog>
      <Context></Context>
      <Refs></Refs>
      <footer>
        {element1}
      </footer>
    </div>
  );
}

export default App;
