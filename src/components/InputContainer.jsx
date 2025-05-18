import React from 'react'

function InputContainer({inputVal, writeTodo, addTodo}) {
    return (
        <div className='input-container'>
            {/* <form> */}
            <input type="text" placeholder='Add a new task' value={inputVal} onChange={writeTodo}/>
            <button onClick={addTodo}>Add</button>
            {/* </form> */}
        </div>
    )
}

export default InputContainer