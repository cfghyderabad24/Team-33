// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/books/');
                console.log(response);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books}
            </ul>
        </div>
    );
};

export default BookList;
