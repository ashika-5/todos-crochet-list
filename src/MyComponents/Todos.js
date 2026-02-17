import React from 'react'
import { TodoItems } from "../MyComponents /TodoItems";

export const todos = (props) => {
  return (
    <div className="container">
      <h3>Todos Crochet List</h3>
      {/* {props.todos} */}
      <TodoItems todo={todos[0]}/>
    </div>
  )
}

export default todos
