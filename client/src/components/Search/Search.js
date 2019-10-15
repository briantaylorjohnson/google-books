import React from "react";
import "./Search.css";
import API from "../../utils/API"

// Creates Search component for heading and links to pages
class Search extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      bookTitle: "",
      bookData: []
    }
    this.searchTitleChange = this.searchTitleChange.bind(this);
    this.searchButtonClick = this.searchButtonClick.bind(this);
  }

  searchTitleChange(c)
  {
    c.preventDefault();
    this.setState({bookTitle: c.target.value});
    console.log(this.state.bookTitle);
  }

  searchButtonClick(s)
  {
    s.preventDefault();
    
    console.log(this.state.bookTitle);
    
    API.bookSearch(this.state.bookTitle)
    .then( (data) =>
    {
      console.log(data);
      this.setState({bookData: data});
      this.setState({bookTitle: ""});
    })
  }

  render()
  {
    return (
      <div className="container book-search pl-3 pt-3 pr-3 pb-3">
        <h5>Book Search</h5>
        <form>
          <div className="form-group">
            <label>Book Title</label>
            <input type="text" className="form-control" id="input-text-book-title" aria-describedby="bookTitleSearch" placeholder="Enter title" onChange={(c) => this.searchTitleChange(c)}></input>
            <small id="bookTitleSearchHelp" className="form-text text-muted">Enter a book title and click the search button to see what's out there!</small>
          </div>
          <button type="submit" className="btn btn-sm btn-success" onClick={(s) => this.searchButtonClick(s)}>Search</button>
        </form>
      </div>
    );
  }
}

function Results()
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

function ResultListing()
{
  return (
    <div>Result Listing Here</div>
  );
}

function SearchContainer()
{
  return (
    <div>
      <Search />
      <Results />
    </div>
  );
}

export {Search, Results, ResultListing, SearchContainer};