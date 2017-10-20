import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import Bookshelf from '../Bookshelf/Bookshelf';

import './ListBooks.css';


const listBooksFilters = [
    {
        type: 'currentlyReading',
        label: 'Currently Reading'
    },
    {
        type: 'wantToRead',
        label: 'Want to Read'
    },
    {
        type: 'read',
        label: 'Read'
    }
];

class ListBooks extends Component {
    render() {
        const {books = [], onUpdateBook} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {books.length
                        ? listBooksFilters.map(({type, label}) => (
                            <Bookshelf
                                key={type}
                                title={label}
                                books={books.filter(book => book.shelf === type)}
                                onUpdateBook={onUpdateBook}
                            />
                        ))
                        : <p align="center">Loading books...</p>
                    }
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
        );
    }
}

ListBooks.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            shelf: PropTypes.string.isRequired
        })
    ),
    onUpdateBook: PropTypes.func.isRequired
};

export default ListBooks;