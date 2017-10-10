import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book/Book';

import './Bookshelf.css';


const Bookshelf = ({title, books}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">
            {title}
        </h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book, index) => (
                    <li key={index}>
                        <Book book={book}/>
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

// TODO - validar o formato dos itens do array - talvez em um arquivo separado

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array
};

export default Bookshelf;