import React from 'react';

function BookList({ books, deleteBook, editBook }) {
  if (books.length === 0) return <p>No books available.</p>;

  return (
    <table border="1" cellPadding="10" style={{ width: '100%', marginTop: 20 }}>
      <thead>
        <tr style={{ backgroundColor: '#eee' }}>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Published Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(({ _id, title, author, category, publishedYear }) => (
          <tr key={_id}>
            <td>{title}</td>
            <td>{author}</td>
            <td>{category}</td>
            <td>{publishedYear}</td>
            <td>
              <button onClick={() => editBook({ _id, title, author, category, publishedYear })}>
                Edit
              </button>{' '}
              <button onClick={() => deleteBook(_id)} style={{ color: 'red' }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
