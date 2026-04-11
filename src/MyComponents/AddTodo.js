import React, { useState, useEffect } from "react";
import "./AddTodo.css";

const AddTodo = ({ addTodo, editingTodo, editTodo, setEditingTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [yarnType, setYarnType] = useState("");
  const [stitches, setStitches] = useState("");
  const [tools, setTools] = useState("");
  const [patternImage, setPatternImage] = useState(null);
  const [projectImage, setProjectImage] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDesc(editingTodo.desc);
      setYarnType(editingTodo.yarnType || "");
      setStitches(editingTodo.stitches || "");
      setTools(editingTodo.tools || "");
      setPatternImage(editingTodo.patternImage || null);
      setProjectImage(editingTodo.projectImage || null);
      setOpen(true);
    }
  }, [editingTodo]);

  const handlePatternImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPatternImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleProjectImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProjectImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and description cannot be blank! 💕");
      return;
    }

    if (editingTodo) {
      editTodo(
        editingTodo.sno,
        title,
        desc,
        yarnType,
        stitches,
        tools,
        patternImage,
        projectImage,
      );
    } else {
      addTodo(
        title,
        desc,
        yarnType,
        stitches,
        tools,
        patternImage,
        projectImage,
      );
    }

    setTitle("");
    setDesc("");
    setYarnType("");
    setStitches("");
    setTools("");
    setPatternImage(null);
    setProjectImage(null);
    setOpen(false);
    if (editingTodo) setEditingTodo(null);
  };

  const handleCancel = () => {
    setOpen(false);
    if (editingTodo) setEditingTodo(null);
  };

  return (
    <div className="add-section">
      {!open ? (
        <button className="add-trigger-btn" onClick={() => setOpen(true)}>
          <span className="plus-circle">+</span>
          Add a new crochet task 🌸
        </button>
      ) : (
        <div className="add-card">
          <div className="add-card-header">
            <span>
              {editingTodo ? "✏️ Edit your project" : "🧵 New crochet project"}
            </span>
            <button className="close-btn" onClick={handleCancel}>
              ✕
            </button>
          </div>

          <form onSubmit={submit} className="add-form">
            <div className="field-row">
              <label>Project Title 💖</label>
              <input
                type="text"
                className="field-input"
                placeholder="e.g. Kuromi Amigurumi"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="field-row">
              <label>Description / Notes</label>
              <textarea
                className="field-input field-textarea"
                placeholder="Write anything special..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={4}
              />
            </div>

            <div className="details-section">
              <h4 className="details-title">🧶 Project Details</h4>

              <div className="field-row">
                <label>Yarn Type</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="e.g. White 4-ply, 50g"
                  value={yarnType}
                  onChange={(e) => setYarnType(e.target.value)}
                />
              </div>

              <div className="field-row">
                <label>Stitches Used</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="e.g. MR, SC, INC, DEC"
                  value={stitches}
                  onChange={(e) => setStitches(e.target.value)}
                />
              </div>

              <div className="field-row">
                <label>Tools Needed</label>
                <input
                  type="text"
                  className="field-input"
                  placeholder="e.g. 3.5mm hook, stitch marker"
                  value={tools}
                  onChange={(e) => setTools(e.target.value)}
                />
              </div>

              <div className="field-row">
                <label>Pattern Image 📄</label>
                <div className="image-upload-box">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePatternImage}
                    id="pattern-upload"
                  />
                  <label htmlFor="pattern-upload" className="upload-label">
                    {patternImage ? (
                      <img
                        src={patternImage}
                        alt="Pattern"
                        className="preview-thumb"
                      />
                    ) : (
                      <span className="upload-placeholder">
                        📸 Upload pattern image
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="field-row">
                <label>Project Image 📸</label>
                <div className="image-upload-box">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProjectImage}
                    id="project-upload"
                  />
                  <label htmlFor="project-upload" className="upload-label">
                    {projectImage ? (
                      <img
                        src={projectImage}
                        alt="Project"
                        className="preview-thumb"
                      />
                    ) : (
                      <span className="upload-placeholder">
                        📸 Upload finished project photo
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button type="submit" className="btn-add">
                {editingTodo ? "Save changes 🌸" : "Add to my basket 💕"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
ohougoguig;
