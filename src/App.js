import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Load todos from localStorage
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno,
      title,
      desc,
    };

    setTodos([...todos, myTodo]);
  };

  // Delete Todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
