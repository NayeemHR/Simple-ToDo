import { useState } from 'react';
import './App.css';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';

function App() {
  const [inputVal, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    if (inputVal.trim() !== '') {
      setTodoList(prevList => [...prevList, inputVal.trim()]);
      setInputValue('');
    }
  }

  function deleteTodo(indexToDelete) {
    setTodoList(prevList =>
      prevList.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <main>
      <h1>ToDo List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={handleInputChange}
        addTodo={addTodo}
      />
      <TodoContainer
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
    </main>
  );
}

export default App;
