import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import Todo from './components/TodoComponents/Todo'

const todo = [
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
  constructor(){
    super();
    this.state ={
      todolist : todo,

    };
  }
  addTodo = event => {
    event.preventDefault();
    console.log(event.target);
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({
      todolist:[...this.state.todolist, newTodo ],
      task: '',
      id:'',
      completed: ''
    });
  }
  handleChanges = e =>{
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {
    return (
      <div>
        <h2> Your Todo For Today</h2>
        <div className="todo-list">
        {this.state.todolist.map((task,index) => (
          < Todo key={index} chicekn={task} />
        ))}
        </div>
        <TodoForm
        addTodo = {this.addTodo}
        handleChanges={this.handleChanges}
        task ={this.state.task}
        id={this.state.id}
        completed ={this.state.completed}
        />
      </div>
    );
  }
}

export default App;
