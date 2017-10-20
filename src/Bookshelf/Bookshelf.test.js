import React from 'react';
import {shallow} from 'enzyme';

import Bookshelf from './Bookshelf';

it('renders without crashing', () => {
    const props = {
        title: 'Read',
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
        <Bookshelf {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
});