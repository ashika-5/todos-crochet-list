import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const getInitialTodos = () => {
    const saved = localStorage.getItem("crochet_todos_v2");
    return saved ? JSON.parse(saved) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("crochet_todos_v2", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc, cat = "other", emoji = "📌") => {
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    setTodos([...todos, { sno, title, desc, cat, emoji, done: false }]);
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  const onToggle = (sno, done) => {
    setTodos(todos.map((t) => (t.sno === sno ? { ...t, done } : t)));
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Header title="My Crochet To-Do 🧶" searchBar={false} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos
                    todos={todos}
                    onDelete={onDelete}
                    onToggle={onToggle}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
