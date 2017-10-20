import React from 'react';
import {shallow} from 'enzyme';

import ListBooks from './ListBooks';

it('renders without crashing', () => {
    const props = {
        books: [
            {
                title: 'My Book',
                shelf: 'read',
                authors: ['Santos, Guilherme']
            }
        ],
        onUpdateBook: jest.fn()
    };
    const wrapper = shallow(
        <ListBooks {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
});

it('renders without crashing when hasnt books', () => {
    const props = {
        onUpdateBook: jest.fn()
    };
    const wrapper = shallow(
        <ListBooks {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
});