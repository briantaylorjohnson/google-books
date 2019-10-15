import React from "react";
import "./Nav.css";

// Creates Nav component for heading and links to pages
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
          (React) Google Books
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/search">Search <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/books">Saved</a>
        </div>
      </div>
    </nav>
  );
}

// Exports Nav component
export default Nav;