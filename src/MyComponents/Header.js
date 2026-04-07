import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Brand */}
        <Link className="header-brand" to="/">
          <span className="brand-icon">🧶</span>
          <span className="brand-text">{props.title}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="header-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </nav>

        {/* Search */}
        {props.searchBar && (
          <div className="header-search">
            <span className="search-icon">🔍</span>
            <input
              type="search"
              placeholder="Search todos..."
              className="search-input"
            />
          </div>
        )}

        {/* Mobile toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            className="nav-link"
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "My Crochet To-Do",
  searchBar: false,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
};
