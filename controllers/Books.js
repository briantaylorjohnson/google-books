// Required dependencies and packages
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");

// Ensuring that all models are required
var db = require("../models");

/*
exports.getBooks = (req, res) => 
{

};

exports.saveBook = (req, res) => 
{

};

exports.deleteBook = (req, res) =>
{

};
*/

exports.bookSearch = (req, res) =>
{
    let searchTitle = req.params.title.replace(/\s/g, "+");

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTitle)
    .then((response) =>
    {
        res.json(response.data.items)
    }
    ).catch((err) =>
    {
        res.json(err.message);
    }
    );
};