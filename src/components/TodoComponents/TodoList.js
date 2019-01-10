// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';
import React from 'react';

function TodoList(props) {
    return(
        <div>
            {props.ToDo.map(list => {
                return <Todo task={list.task}/>
            })}
        </div>
    );
};

export default TodoList;