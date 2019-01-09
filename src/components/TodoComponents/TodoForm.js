import React from 'react';

function TodoForm(props){


    return(
    <form>
        <input  value={props.inputText} type="text" name= 'inputText' placeholder="new task here" 
        onChange={props.handleChanges}
        />
        <button
        onClick={props.addNewTask}
        >
        Submit
        </button>
        <button 
        
        >Clear</button>
        
    </form>
);
};

export default TodoForm;