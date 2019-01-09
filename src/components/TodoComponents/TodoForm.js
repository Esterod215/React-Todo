import React from 'react';

function TodoForm(props){


    return(
    <form>
        <input  value={props.inputText} type="text" name= 'inputText' placeholder="new task here" 
        onChange={props.handleChanges}
        />
        <button>Add Task</button>
        <button onClick={(ev) => {
            ev.preventDefault();
            console.log('click')

        }}
        
        >Clear</button>
        
    </form>
);
};

export default TodoForm;