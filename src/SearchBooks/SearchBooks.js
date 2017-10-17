import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import * as BooksAPI from '../commons/services/BooksAPI';
import Book from '../Book/Book';

import './SearchBooks.css';


class SearchBooks extends Component {
    state = {
        books: [],
        query: ''
    };

    handleChangeSearchInput = event => {
        const query = event.target.value;

        this.setState({query});

        BooksAPI
            .search(query)
            .then(response => {
                let books = response;

                if (response.error) {
                    // TODO - tratamento para quando não existir resultado
                    books = [];
                }

                this.setState({books})
            });
    };

    render() {
        const {books = [], query} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to="/"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={this.handleChangeSearchInput}
                            autoFocus={true}
                        />
                    </div>
                </div>
                <div className="search-books-results">
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
    }
}

//FIXME
SearchBooks.propTypes = {};

export default SearchBooks;