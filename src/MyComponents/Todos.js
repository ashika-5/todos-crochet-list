import React, { useState } from "react";
import TodoItems from "./TodoItems";
import "./Todos.css";

const Todos = ({
  todos,
  onDelete,
  onToggle,
  searchTerm,
  onEdit,
  onClearCompleted,
}) => {
  const [sortBy, setSortBy] = useState("newest");

  let processed = [...todos];

  // Search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    processed = processed.filter(
      (t) =>
        t.title.toLowerCase().includes(term) ||
        t.desc.toLowerCase().includes(term),
    );
  }

  // Sort
  processed = processed.sort((a, b) => {
    if (sortBy === "newest")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "oldest")
      return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortBy === "a-z") return a.title.localeCompare(b.title);
    return 0;
  });

  const doneCount = todos.filter((t) => t.done).length;
  const pct = todos.length ? Math.round((doneCount / todos.length) * 100) : 0;

  return (
    <div className="todos-section">
      {todos.length > 0 && (
        <div className="stats-bar">
          <div className="stat-pill">
            <span className="stat-num">{todos.length}</span>
            <span className="stat-label">TOTAL</span>
          </div>
          <div className="stat-pill stat-pill--done">
            <span className="stat-num">{doneCount}</span>
            <span className="stat-label">DONE</span>
          </div>
          <div className="progress-container">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="progress-label">{pct}%</span>
          </div>

          {doneCount > 0 && (
            <button className="clear-btn" onClick={onClearCompleted}>
              Clear completed 🗑️
            </button>
          )}
        </div>
      )}

      {/* Only ALL button - no other categories */}
      {todos.length > 0 && (
        <div className="filter-tabs">
          <button className="filter-tab filter-tab--active">
            🌸 ALL ({todos.length})
          </button>
        </div>
      )}

      {/* Sort */}
      {todos.length > 0 && (
        <div className="sort-row">
          <span className="sort-label">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="a-z">A to Z</option>
          </select>
        </div>
      )}

      <div className="todos-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🧶</div>
            <p className="empty-title">No tasks yet!</p>
            <p className="empty-sub">Add your first crochet task above ✨</p>
          </div>
        ) : processed.length === 0 ? (
          <div className="empty-state">
            <p className="empty-sub">No tasks match your search.</p>
          </div>
        ) : (
          processed.map((todo) => (
            <TodoItems
              todo={todo}
              key={todo.sno}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;
