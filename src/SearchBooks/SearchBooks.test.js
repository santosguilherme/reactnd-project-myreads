import React from 'react';
import {shallow} from 'enzyme';

import SearchBooks from './SearchBooks';

it('renders without crashing', () => {
    const props = {
        booksResult: [{
            title: 'My Book',
            shelf: 'read',
            authors: ['Santos, Guilherme']
        }],
        message: '',
        onSearchBooks: jest.fn(),
        onUpdateBook: jest.fn()
    };
    const wrapper = shallow(<SearchBooks {...props}/>);

    expect(wrapper).toMatchSnapshot();
});

it('renders with empty array', () => {
    const props = {
        booksResult: [],
        message: '',
        onSearchBooks: jest.fn(),
        onUpdateBook: jest.fn()
    };
    const wrapper = shallow(<SearchBooks {...props}/>);

    expect(wrapper).toMatchSnapshot();
});

it('Should call the onSearchBooks property when change input', () => {
    const props = {
        booksResult: [],
        message: '',
        onSearchBooks: jest.fn(),
        onUpdateBook: jest.fn()
    };
    const wrapper = shallow(<SearchBooks {...props}/>);
    const input = wrapper.find('input');

    input.simulate('change', {target: {value: 'something'}});

    expect(props.onSearchBooks).toHaveBeenCalledTimes(1);
    expect(props.onSearchBooks.mock.calls[0]).toEqual(['something']);
});