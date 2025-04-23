import React, { useState } from 'react';

function AddBook({ addBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    publishedYear: ''
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
    addBook({
      ...formData,
      publishedYear: Number(formData.publishedYear)
    });
    setFormData({ title: '', author: '', category: '', publishedYear: '' });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add New Book</h2>
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
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
