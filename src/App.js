import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from "react";


function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    //Deleting this way doesnot work in react
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1)

    setTodos(todos.filter((e)=> {
    return e !== todo;
  }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "one single rose, tulip, and sunflower",
      desc: "I have to learn the pattern to get this rose done",
    },
    {
      sno: 2,
      title: "animal stuffed keychain",
      desc: "I have to collect all the color of thread to complete it.",
    },
    {
      sno: 3,
      title: "Mini bag",
      desc: "I have to learn the pattern to get this bag done",
    },
  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
