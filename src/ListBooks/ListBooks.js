import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import Bookshelf from '../Bookshelf/Bookshelf';
import * as BooksAPI from '../commons/services/BooksAPI';

import './ListBooks.css';


class ListBooks extends Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        books: [],
        filters: [
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
        ]
    };

    componentDidMount() {
        BooksAPI
            .getAll()
            .then(books => this.setState({books}));
    }

    render() {
        const {books, filters} = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {filters.map(({type, label}) => (
                        <Bookshelf
                            key={type}
                            title={label}
                            books={books.filter(book => book.shelf === type)}
                        />
                    ))}
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

export default ListBooks;