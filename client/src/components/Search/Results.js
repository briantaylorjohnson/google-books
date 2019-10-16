import React from "react";
import "./Results.css";
import {ResultListing} from "./ResultListing"

export function Results(props)
{
  return (
    <div className="search-results-listings">

      {props.bookData.map((book) =>
      {
        const bookDetails = book.volumeInfo;

        return (
          <ResultListing
            title={bookDetails.title}
            authors={bookDetails.authors}
            description={bookDetails.description}
            link={bookDetails.canonicalVolumeLink}
            img={bookDetails.imageLinks.smallThumbnail}
            key={book.id}
          />
        )
      })}
    </div>
  );
}


