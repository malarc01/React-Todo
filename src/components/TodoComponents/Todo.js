import React from 'react';

function Todo (props){
  return(
    <div className="todo-card">
      <div
      className={`item${props.chicekn.completed ? ' completed': ''}`}
      onClick={()=>props.toggleItem(props.chicekn.id)}
      >
        <h3>{props.chicekn.task}</h3>
        <p>Task: {props.chicekn.task}</p>
        <p>ID: {props.chicekn.id}</p>
        <p>Completed: {props.chicekn.completed}</p>
      </div>



    </div>
  );
}
export default Todo;
