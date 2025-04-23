const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

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

// Define route for root URL
app.get('/', (req, res) => {
  res.send('Book Directory API is running 🚀');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});