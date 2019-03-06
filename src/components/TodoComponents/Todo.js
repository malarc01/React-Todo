import React from 'react';

function Todo (props){
  return(
    <div className="todo-card">
      <div className="todo-info">
        <h3>{props.chicekn.task}</h3>
        <p><strong>Task:</strong> {props.chicekn.task}</p>
        <p><strong>ID:</strong> {props.chicekn.id}</p>
        <p><strong>Completed:</strong> {props.chicekn.completed}</p>
      </div>



    </div>
  );
}
export default Todo;
