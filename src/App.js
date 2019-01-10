import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const ToDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: ToDo,
      inputText: '',
      
    };
    
  };
   handleChanges=(ev) => {
    this.setState({[ev.target.name]:ev.target.value})
    
    console.log(ev.target.name);

};
addNewTask=(ev) => {
  ev.preventDefault();
  this.setState({todo:[...this.state.todo,{task:this.state.inputText,id:Date.now(),completed:false}],inputText:''});
  

};
toggleTrue=id=>{
  this.setState({
    todo: this.state.todo.map((task) => {
      if (id !== task.id) {
        return task;
      } else {
        
        return {
          ...task,
          completed: !task.completed
        };
      }
    })
  },()=>console.log(this.state.todo[0].completed));
};


  
  render() {
    return (
      <div>
      <ToDoList toggleTrue={this.toggleTrue} todo={this.state.todo}/>
      <TodoForm addNewTask={this.addNewTask} handleChanges={this.handleChanges} inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
