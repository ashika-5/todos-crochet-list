import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-card">
        <div className="about-hero">🧶</div>
        <h2 className="about-title">About My Crochet To-Do</h2>
        <p className="about-body">
          A personal crochet tracker to keep all your yarn types, stitches,
          patterns and tutorials organised — all in one pretty place. 🌸
        </p>
        <div className="about-tags">
          <span>🧶 Yarn types</span>
          <span>✨ Stitches</span>
          <span>💜 Patterns</span>
          <span>✂️ Tools</span>
          <span>📺 Tutorials</span>
        </div>
        <p className="about-sub">Made with love for crochet enthusiasts 💕</p>
      </div>
    </div>
  );
};

export default About;
