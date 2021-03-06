import React from 'react';
import {shallow, mount} from 'enzyme';

import BookshelfChanger from './BookshelfChanger';

it('renders without crashing', () => {
    const onChangeOptionMock = jest.fn();
    const wrapper = shallow(<BookshelfChanger onChangeOption={onChangeOptionMock}/>);

    expect(wrapper).toMatchSnapshot();
});

it('Should call the onChangeOption property when change selected option', () => {
    const onChangeOptionMock = jest.fn();
    const test = mount(<BookshelfChanger onChangeOption={onChangeOptionMock}/>);

    test.find('select').simulate('change');
    expect(onChangeOptionMock).toHaveBeenCalledTimes(1);
});