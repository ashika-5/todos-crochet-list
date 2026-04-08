import React, { useState } from "react";
import "./TodoItems.css";

const TodoItems = ({ todo, onDelete, onToggle, onEdit }) => {
  const [done, setDone] = useState(todo.done || false);

  const handleToggle = () => {
    const next = !done;
    setDone(next);
    if (onToggle) onToggle(todo.sno, next);
  };

  return (
    <div className={`todo-card ${done ? "todo-card--done" : ""}`}>
      <button
        className={`check-btn ${done ? "check-btn--checked" : ""}`}
        onClick={handleToggle}
      >
        {done && <span className="checkmark">✓</span>}
      </button>

      <div className="todo-body">
        <div className="todo-top">
          <span className="todo-emoji">🧶</span>
          <h4 className={`todo-title ${done ? "todo-title--done" : ""}`}>
            {todo.title}
          </h4>
        </div>

        <p className="todo-desc">{todo.desc}</p>

        {todo.yarnType && (
          <p className="todo-detail">
            <strong>🧶 Yarn:</strong> {todo.yarnType}
          </p>
        )}
        {todo.stitches && (
          <p className="todo-detail">
            <strong>✨ Stitches:</strong> {todo.stitches}
          </p>
        )}
        {todo.tools && (
          <p className="todo-detail">
            <strong>🛠️ Tools:</strong> {todo.tools}
          </p>
        )}

        {/* Pattern Image */}
        {todo.patternImage && (
          <div className="todo-image-container">
            <p className="image-label">📄 Pattern</p>
            <img src={todo.patternImage} alt="Pattern" className="todo-image" />
          </div>
        )}

        {/* Project Image */}
        {todo.projectImage && (
          <div className="todo-image-container">
            <p className="image-label">📸 Finished Project</p>
            <img src={todo.projectImage} alt="Project" className="todo-image" />
          </div>
        )}

        <p className="todo-date">
          Added {new Date(todo.createdAt).toLocaleDateString()}
        </p>
      </div>

      <button className="edit-btn" onClick={() => onEdit(todo)}>
        ✏️
      </button>
      <button className="delete-btn" onClick={() => onDelete(todo)}>
        🗑️
      </button>
    </div>
  );
};

export default TodoItems;
