import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import './fireworks.css';

const API_URL = 'http://localhost:5000/api/books';

function createFireworks(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const container = document.getElementById('fireworks');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'firework';

    const angleH = Math.random() * 360;
    const angleV = Math.random() * 90;
    const radius = Math.random() * 150 + 50;

    const x3d = radius * Math.cos(angleV * Math.PI / 180) * Math.cos(angleH * Math.PI / 180);
    const y3d = -radius * Math.sin(angleV * Math.PI / 180);
    const z3d = radius * Math.cos(angleV * Math.PI / 180) * Math.sin(angleH * Math.PI / 180);

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particle.style.setProperty('--x', `${x3d}px`);
    particle.style.setProperty('--y', `${y3d}px`);
    particle.style.setProperty('--z', `${z3d}px`);

    container.appendChild(particle);

    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }
}

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Add book
  const addBook = async (book) => {
    try {
      await axios.post(API_URL, book);
      fetchBooks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddBook = async (bookData) => {
    try {
      await addBook(bookData);
      createFireworks(window.innerWidth / 2, window.innerHeight / 2);
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  // Delete book
  const deleteBook = async (id) => {
    if (window.confirm('Are you sure to delete this book?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchBooks();
      } catch (err) {
        console.error(err);
      }
    }
  };

  // Start editing book
  const editBook = (book) => {
    setEditingBook(book);
  };

  // Update book
  const updateBook = async (id, updatedBook) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedBook);
      setEditingBook(null);
      fetchBooks();
    } catch (err) {
      console.error(err);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingBook(null);
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <div id="fireworks"></div>
      <h1>Book Directory</h1>

      {editingBook ? (
        <EditBook
          book={editingBook}
          updateBook={updateBook}
          cancelEdit={cancelEdit}
        />
      ) : (
        <AddBook addBook={handleAddBook} />
      )}

      {books.length > 0 ? (
        <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default App;
