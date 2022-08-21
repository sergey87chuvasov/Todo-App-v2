import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import TodosActions from './components/Todos/TodosActions';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      siCompleted: false,
      id: uuidv4(),
    };
    // console.log(newTodo);
    setTodos([...todos, newTodo]);
    // now todos it's [{},{},{}...]
  };

  const deleteTodoHandler = (id) => {
    // el stay in arr if filter return true
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  // console.log(completedTodosCount);

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          //convert to boolean !!0 = false
          completedTodoExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
