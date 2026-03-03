import React from "react";
import TodoItems from "./TodoItems";

const Todos = (props) => {
  let myStyle = {
    minHeight: "80vh",
    margin: "50px auto"
  };

  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center ">Todos Crochet List</h3>

      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
          return ( <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
            
            );
          })}
    </div>
  );
};

export default Todos;
