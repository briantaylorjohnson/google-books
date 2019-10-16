import React from "react";
import "./Results.css";

export function ResultListing(
{
    title,
    authors,
    description,
    link,
    img
})
{
  return (
    <div className="result-listing mb-2 pl-3 pr-3 pt-2 pb-2">
        <div className="row">
            <div className="col-md-2 pt-2 pb-2">
                <img src={img} alt={title}></img>
            </div>
            <div className="col-md-10">
                <span className="book-title">{title}<br /></span>
                <span className="book-author">
                {
                    (authors.length > 1)? authors.map((author, index) => <span key={index}>{author} - </span>) : authors.map((author, index) => <span key={index}>{author}</span>)
                }
                <br />
                </span>
                <span>{description}<br /></span>
                <a className="mt-3 mr-1" href={link} target="_blank" rel="noopener noreferrer"><button className="btn btn-sm btn-success">View</button></a>
                <button className="btn btn-sm btn-success mt-3 mb-3 ml-1">Save</button>
            </div>
        </div>
    </div>
  );
}