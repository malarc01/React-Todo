import React from 'react';

const TodoForm = props => {
  return(
    <form onSubmit={props.addTodo}>
    <input
    type="text"
    value={props.task}
    onChange={props.handleChanges}
    name="task"
    placeholder="ENTER TASK"
    />
    <input
    type="text"
    value={props.id}
    onChange={props.handleChanges}
    name="id"
    placeholder="UNIQUE NUMBER"
    />

    <button type="submit">Add Todo</button>
    <button onClick={this.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm
