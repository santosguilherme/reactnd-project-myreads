import React from 'react';
import PropTypes from 'prop-types';

import BookshelfChanger from '../Bookshelf/BookshelfChanger';

import './Book.css';

const Book = ({book}) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks.thumbnail}")`
            }}/>
            <BookshelfChanger shelf={book.shelf}/>
        </div>
        <div className="book-title">
            {book.title}
        </div>
        <div className="book-authors">
            {(book.authors || []).map(author => (
                <span key={author}>{author}</span>
            ))}
        </div>
    </div>
);

// TODO - criar propType externo

Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;