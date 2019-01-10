import React from'react'
import './Todo.css'
const Todo=(props)=>{
return (

<div
className={props.completed ? 'completed': null}
onClick={() => props.toggleTrue(props.id)}
>
    <h1>{props.task}</h1>
</div>
);
}







export default Todo;