// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';
import React from 'react';

function TodoList(props) {
    return(
        <div>
            {props.todo.map((list, index)=> {
                return( 
                <Todo 
                task={list.task}
                
                id={list.id}
                toggleTrue={props.toggleTrue}
                completed={list.completed}



                
                />
                );
            })}
        </div>
    );
};

export default TodoList;