import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './BookshelfChanger.css';


class BookshelfChanger extends Component {
    handleChangeSelect = event => {
        const {onChangeOption} = this.props;
        onChangeOption(event.target.value);
    };

    render() {
        const {shelf} = this.props;

        return (
            <div className="book-shelf-changer">
                <select
                    value={shelf}
                    onChange={this.handleChangeSelect}
                >
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

BookshelfChanger.propTypes = {
    shelf: PropTypes.string,
    onChangeOption: PropTypes.func.isRequired
};

export default BookshelfChanger;