import React from 'react';
import {shallow, mount} from 'enzyme';

import Book from './Book';

it('renders without crashing', () => {
    const bookMock = {
        title: 'My Book',
        shelf: 'read',
        authors: ['Santos, Guilherme']
    };
    const onUpdateBookMock = jest.fn();

    const wrapper = shallow(
        <Book
            book={bookMock}
            onUpdateBook={onUpdateBookMock}
        />
    );

    expect(wrapper).toMatchSnapshot();
});

it('Should call the onUpdateBook property when change bookshelf', () => {
    const bookMock = {
        title: 'My Book',
        shelf: 'read',
        authors: ['Santos, Guilherme']
    };
    const onUpdateBookMock = jest.fn();

    const test = mount(
        <Book
            book={bookMock}
            onUpdateBook={onUpdateBookMock}
        />
    );

    test.find('select').simulate('change');
    expect(onUpdateBookMock).toHaveBeenCalledTimes(1);
});

it('Should render the backgroundColor style property when book hasnt a imageLink attribute', () => {
    const bookMock = {
        title: 'My Book',
        shelf: 'read',
        authors: ['Santos, Guilherme']
    };
    const onUpdateBookMock = jest.fn();

    const test = mount(
        <Book
            book={bookMock}
            onUpdateBook={onUpdateBookMock}
        />
    );

    const bookCoverStyle = test.find('.book-cover').prop('style');
    const {backgroundImage, backgroundColor} = bookCoverStyle;

    expect(backgroundColor).toBeDefined();
    expect(backgroundImage).toBeUndefined();
});

it('Should render the backgroundImage style property when book has a imageLink attribute', () => {
    const thumbnail = 'http://lorempixel.com/128/193';
    const bookMock = {
        title: 'My Book',
        shelf: 'read',
        authors: ['Santos, Guilherme'],
        imageLinks: {thumbnail}
    };
    const onUpdateBookMock = jest.fn();

    const test = mount(
        <Book
            book={bookMock}
            onUpdateBook={onUpdateBookMock}
        />
    );

    const bookCoverStyle = test.find('.book-cover').prop('style');
    const {backgroundImage, backgroundColor} = bookCoverStyle;

    expect(backgroundImage).toMatch(new RegExp(thumbnail));
    expect(backgroundColor).toBeUndefined();
});
