import React, { useState } from "react";
import TodoItems from "./TodoItems";
import "./Todos.css";

const FILTERS = [
  { value: "all", label: "All", emoji: "🌸" },
  { value: "yarn", label: "Yarn", emoji: "🧶" },
  { value: "stitch", label: "Stitches", emoji: "✨" },
  { value: "pattern", label: "Patterns", emoji: "💜" },
  { value: "tool", label: "Tools", emoji: "✂️" },
  { value: "video", label: "Tutorials", emoji: "📺" },
  { value: "other", label: "Other", emoji: "📌" },
];

const Todos = ({ todos, onDelete, onToggle }) => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? todos : todos.filter((t) => t.cat === filter);
  const doneCount = todos.filter((t) => t.done).length;
  const pct = todos.length ? Math.round((doneCount / todos.length) * 100) : 0;

  return (
    <div className="todos-section">
      {/* Stats bar */}
      {todos.length > 0 && (
        <div className="stats-bar">
          <div className="stat-pill">
            <span className="stat-num">{todos.length}</span>
            <span className="stat-label">total</span>
          </div>
          <div className="stat-pill stat-pill--done">
            <span className="stat-num">{doneCount}</span>
            <span className="stat-label">done</span>
          </div>
          <div className="progress-container">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="progress-label">{pct}%</span>
          </div>
        </div>
      )}

      {/* Filter tabs */}
      {todos.length > 0 && (
        <div className="filter-tabs">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-tab ${filter === f.value ? "filter-tab--active" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.emoji} {f.label}
              {f.value !== "all" && (
                <span className="filter-count">
                  {todos.filter((t) => t.cat === f.value).length}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* List */}
      <div className="todos-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🧶</div>
            <p className="empty-title">No tasks yet!</p>
            <p className="empty-sub">
              Add your first crochet task above to get started ✨
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <p className="empty-sub">No tasks in this category yet.</p>
          </div>
        ) : (
          filtered.map((todo) => (
            <TodoItems
              todo={todo}
              key={todo.sno}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;
