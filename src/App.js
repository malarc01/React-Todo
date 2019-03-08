import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import Todo from './components/TodoComponents/Todo'

import './components/TodoComponents/Todo.css'
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
  trueFalse = info => {
      this.setState({
        todolist: this.state.todolist.map(event => {
          if (info === event.id) {
            return {
              ...event, // same as below
              //             name: item.name,
              //             id: item.id,
              //             purchased: item.purchased,
              completed: !event.completed
            };
          }
          return event;
        })
      });
    };

  clearCompleted = event =>{
    event.preventDefault();
    console.log('TEST');
    this.setState({
      todolist: this.state.todolist.filter(event => !event.completed)
    })
  }

  render() {
    const sortedList = this.state.todolist.sort((a,b)=> a.completed-b.completed);
    return (
      <div>
        <h2> Your Todo For Today</h2>
        <div className="todo-list">
        {sortedList.map((task,index) => (
          < Todo
          key={index}
          chicekn={task}
          toggleItem= {this.trueFalse} />
        ))}
        </div>
        <TodoForm
        addTodo = {this.addTodo}
        handleChanges={this.handleChanges}
        task ={this.state.task}
        id={this.state.id}
        completed ={this.state.completed}
        />



        <button onClick={this.clearCompleted}>Be Gone!</button>
      </div>
    );
  }
}

export default App;
