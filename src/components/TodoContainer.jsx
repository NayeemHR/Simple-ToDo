import React from 'react';
import Todo from './Todo';

function TodoContainer({ todoList, deleteTodo }) {
  return (
    <div className='task-container'>
      {todoList.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoContainer;
