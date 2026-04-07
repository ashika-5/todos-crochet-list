import React, { useState } from "react";
import "./AddTodo.css";

const CATEGORIES = [
  { value: "yarn", label: "Yarn type", emoji: "🧶" },
  { value: "stitch", label: "Stitch", emoji: "✨" },
  { value: "pattern", label: "Pattern", emoji: "💜" },
  { value: "tool", label: "Tool", emoji: "✂️" },
  { value: "video", label: "Tutorial", emoji: "📺" },
  { value: "other", label: "Other", emoji: "📌" },
];

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("yarn");
  const [open, setOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and description cannot be blank!");
      return;
    }
    const chosen = CATEGORIES.find((c) => c.value === cat);
    addTodo(title, desc, cat, chosen?.emoji || "📌");
    setTitle("");
    setDesc("");
    setCat("yarn");
    setOpen(false);
  };

  return (
    <div className="add-section">
      {!open ? (
        <button className="add-trigger-btn" onClick={() => setOpen(true)}>
          <span className="plus-circle">+</span>
          Add a new crochet task
        </button>
      ) : (
        <div className="add-card">
          <div className="add-card-header">
            <span>🧵 New task</span>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <form onSubmit={submit} className="add-form">
            {/* Category pills */}
            <div className="cat-row">
              {CATEGORIES.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  className={`cat-pill ${cat === c.value ? "cat-pill--active" : ""}`}
                  onClick={() => setCat(c.value)}
                >
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>

            <div className="field-row">
              <label>Title</label>
              <input
                type="text"
                className="field-input"
                placeholder="e.g. Magic ring stitch"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="field-row">
              <label>Description / Notes</label>
              <textarea
                className="field-input field-textarea"
                placeholder="e.g. Used for starting amigurumi rounds. Pull tightly to close."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={3}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn-add">
                Add task 🌸
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
