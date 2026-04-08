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
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return parsed.map((todo) => ({
      ...todo,
      createdAt: todo.createdAt || new Date().toISOString(),
    }));
  };

  const [todos, setTodos] = useState(getInitialTodos);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("crochet_todos_v2", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (
    title,
    desc,
    yarnType = "",
    stitches = "",
    tools = "",
    patternImage = null,
    projectImage = null,
  ) => {
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    setTodos([
      ...todos,
      {
        sno,
        title,
        desc,
        done: false,
        createdAt: new Date().toISOString(),
        yarnType,
        stitches,
        tools,
        patternImage,
        projectImage,
      },
    ]);
  };

  const editTodo = (
    sno,
    title,
    desc,
    yarnType,
    stitches,
    tools,
    patternImage,
    projectImage,
  ) => {
    setTodos(
      todos.map((t) =>
        t.sno === sno
          ? {
              ...t,
              title,
              desc,
              yarnType,
              stitches,
              tools,
              patternImage,
              projectImage,
            }
          : t,
      ),
    );
    setEditingTodo(null);
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  const onToggle = (sno, done) => {
    setTodos(todos.map((t) => (t.sno === sno ? { ...t, done } : t)));
  };

  const onClearCompleted = () => {
    if (window.confirm("Clear all completed tasks? This cannot be undone.")) {
      setTodos(todos.filter((t) => !t.done));
    }
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Header
          title="My Crochet To-Do 🧶"
          searchBar={true}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTodo
                    addTodo={addTodo}
                    editingTodo={editingTodo}
                    editTodo={editTodo}
                    setEditingTodo={setEditingTodo}
                  />
                  <Todos
                    todos={todos}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    searchTerm={searchTerm}
                    onEdit={(todo) => setEditingTodo(todo)}
                    onClearCompleted={onClearCompleted}
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
