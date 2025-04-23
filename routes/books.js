const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // fetch books from DB or dummy data
  const books = [
    { id: 1, title: "Divas Ase Hote", author: "G. D. Madgulkar", category: "Atmacharitra", publishedYear: 1961 }
  ];
  res.json(books);
});

module.exports = router;