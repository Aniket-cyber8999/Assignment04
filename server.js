const express = require('express');
const app = express();

// JSON body parsing middleware
app.use(express.json());

// Example dummy books data or real MongoDB connection
const books = [
  { id: 1, title: "Divas Ase Hote", author: "G. D. Madgulkar", category: "Atmacharitra", publishedYear: 1961 }
];

// Define route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});