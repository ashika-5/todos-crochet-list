import React, { useState } from "react";
import "./TodoItems.css";

const CAT_STYLES = {
  yarn: { bg: "#e8fdf5", color: "#0f6e56", label: "Yarn type" },
  stitch: { bg: "#eeedfe", color: "#3c3489", label: "Stitch" },
  pattern: { bg: "#fbeaf0", color: "#993556", label: "Pattern" },
  tool: { bg: "#faeeda", color: "#854f0b", label: "Tool" },
  video: { bg: "#e6f1fb", color: "#185fa5", label: "Tutorial" },
  other: { bg: "#f1efe8", color: "#5f5e5a", label: "Other" },
};

const TodoItems = ({ todo, onDelete, onToggle }) => {
  const [done, setDone] = useState(todo.done || false);
  const style = CAT_STYLES[todo.cat] || CAT_STYLES.other;

  const handleToggle = () => {
    const next = !done;
    setDone(next);
    if (onToggle) onToggle(todo.sno, next);
  };

  return (
    <div className={`todo-card ${done ? "todo-card--done" : ""}`}>
      {/* Done checkbox */}
      <button
        className={`check-btn ${done ? "check-btn--checked" : ""}`}
        onClick={handleToggle}
        aria-label="Toggle done"
      >
        {done && <span className="checkmark">✓</span>}
      </button>

      <div className="todo-body">
        <div className="todo-top">
          <span className="todo-emoji">{todo.emoji || "📌"}</span>
          <h4 className={`todo-title ${done ? "todo-title--done" : ""}`}>
            {todo.title}
          </h4>
          <span
            className="todo-tag"
            style={{ background: style.bg, color: style.color }}
          >
            {style.label}
          </span>
        </div>
        <p className="todo-desc">{todo.desc}</p>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDelete(todo)}
        aria-label="Delete"
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItems;
