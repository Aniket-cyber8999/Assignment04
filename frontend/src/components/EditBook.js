import React, { useState } from 'react';

function EditBook({ book, updateBook, cancelEdit }) {
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    category: book.category,
    publishedYear: book.publishedYear,
  });

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.category || !formData.publishedYear) {
      alert('Please fill all fields');
      return;
    }
    updateBook(book._id, {
      ...formData,
      publishedYear: Number(formData.publishedYear),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Edit Book</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={onChange}
      /><br /><br />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={formData.author}
        onChange={onChange}
      /><br /><br />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={formData.category}
        onChange={onChange}
      /><br /><br />
      <input
        type="number"
        placeholder="Published Year"
        name="publishedYear"
        value={formData.publishedYear}
        onChange={onChange}
      /><br /><br />
      <button type="submit">Update Book</button>{' '}
      <button type="button" onClick={cancelEdit}>Cancel</button>
    </form>
  );
}

export default EditBook;
