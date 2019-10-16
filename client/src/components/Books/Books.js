import React from "react";
import "./Books.css";
import {Results} from "../Search/Results"
import API from "../../utils/API";

// Creates Nav component for heading and links to pages
class Books extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      bookTitle: "",
      savedBooks: [],
      page: "books",
      updated: false
    }
  }

  componentDidMount()
  {
    this.getBooks();
  }

  getBooks = () =>
  {
    API.getBooks().then((res) => 
    {
      console.log(res.data);
      this.setState({savedBooks: res.data});
      console.log(this.state.savedBooks);
    }).catch((err) => console.log(err));
    
  }

  render()
  {
    return (
      <div className="container book-search-results pl-3 pt-3 pr-3 pb-3 mt-3">
            <h5>Saved Books</h5>
              <Results 
                bookData={this.state.savedBooks}
                page={this.state.page}
              />
      </div>
    );
  }
}

// Exports Nav component
export default Books;