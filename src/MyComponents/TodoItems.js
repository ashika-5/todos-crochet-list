import React from 'react'

export const TodoItems = ({todos}) => {
  return (
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <TodoItems todo = {props.todos[0]}/> 
    </div>
  )
}

export default todos
