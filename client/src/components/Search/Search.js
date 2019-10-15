import React from "react";
import "./Search.css";

// Creates Search component for heading and links to pages
export function Search()
{
  return (
    <div className="container book-search pl-3 pt-3 pr-3 pb-3">
      <h5>Book Search</h5>
      <form>
        <div className="form-group">
          <label>Book Title</label>
          <input type="text" className="form-control" id="input-text-book-title" aria-describedby="bookTitleSearch" placeholder="Enter title"></input>
          <small id="bookTitleSearchHelp" className="form-text text-muted">Enter a book title and click the search button to see what's out there!</small>
        </div>
        <button type="submit" className="btn btn-sm btn-success">Search</button>
      </form>
    </div>
  );
}

export function Results()
{
  return (
    <div className="container book-search-results pl-3 pt-3 pr-3 pb-3 mt-3">
      <h5>Search Results</h5>
      <div className="search-results-listings">
        <ResultListing />
      </div>
    </div>
  );
}

export function ResultListing()
{
  return (
    <div>Result Listing Here</div>
  );
}

export function SearchContainer()
{
  return (
    <div>
      <Search />
      <Results />
    </div>
  );
}
