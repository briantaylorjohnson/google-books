import React from "react";
import "./Jumbotron.css";

// Creates Nav component for heading and links to pages
function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">(React) Google Books Search</h1>
            <p className="lead">Welcome! Here you can search for and save books of interest.</p>
        </div>
    </div>
  );
}

// Exports Nav component
export default Jumbotron;