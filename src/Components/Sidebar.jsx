import React, { useState } from "react";
import '../Style/Sidebar.css'
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setOffcanvasOpen(false);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            onClick={() => setOffcanvasOpen(!isOffcanvasOpen)}
          >
            <i className="bi bi-text-left" style={{ fontSize: "34px" }}></i>
          </button>
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-start${isOffcanvasOpen ? " show" : ""}`}
        tabIndex="-1"
        id="offcanvasExample"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Sidebar Menu</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setOffcanvasOpen(false)}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <nav className="nav flex-column">
            <Link to="/" className="nav-link" aria-current="page" onClick={handleLinkClick}>
              Dashboard
            </Link>
            <Link to="/login" className="nav-link" onClick={handleLinkClick}>
              Login
            </Link>
            <Link to="/logout" className="nav-link" onClick={handleLinkClick}>
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
