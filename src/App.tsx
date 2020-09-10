import React from 'react';
import TodoList from './components/TodoList'
import './App.css';
import TodoProvider from './components/TodoList/TodoProvider';

const App:React.FC =()=> {
  return (
    <div className="App">
        <h1>Todo-list</h1>
        <TodoProvider >
           { (data) => <TodoList data={data}/> }
          </TodoProvider>
    </div>
  );
}

export default App;
