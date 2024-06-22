// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
    const [data, setData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(data)
    e.preventDefault();
    axios.post('http://localhost:8000/api/submit/', data)
      .then(response => {
        console.log('Data submitted successfully', response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={data.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
};

export default BookList;