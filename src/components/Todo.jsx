import React from 'react';

function Todo({ todo, onDelete }) {
  return (
    <div className='todo-item'>
      <span>{todo}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Todo;