const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.route('/:search')
  .get(async (req, res) => {
    const search = req.params.search;

    const key = process.env.REACT_APP_GOOGLE_BOOKS;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`;
    console.log(url);

    const google_response = await fetch(url);
    const google_data = await google_response.json();

    res.json(google_data);
});

module.exports = router;