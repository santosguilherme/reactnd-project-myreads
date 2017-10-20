import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import If from '../commons/components/If';
import Book from '../Book/Book';

import './SearchBooks.css';


class SearchBooks extends Component {
    state = {
        query: ''
    };

    handleChangeSearchInput = event => {
        const {onSearchBooks} = this.props;
        const query = event.target.value;

        this.setState({query});
        onSearchBooks(query);
    };

    render() {
        const {query} = this.state;
        const {onUpdateBook, message, booksResult = []} = this.props;

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
                    <If test={message}>
                        <p align="center">{message}</p>
                    </If>
                    <ol className="books-grid">
                        {booksResult.map((book, index) => (
                            <li key={index}>
                                <Book
                                    book={book}
                                    onUpdateBook={onUpdateBook}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

SearchBooks.defaultProps = {
    message: 'Enter the title or actor you want to search, in the field above.'
};

SearchBooks.propTypes = {
    booksResult: PropTypes.array,
    message: PropTypes.string,
    onSearchBooks: PropTypes.func.isRequired,
    onUpdateBook: PropTypes.func.isRequired
};

export default SearchBooks;