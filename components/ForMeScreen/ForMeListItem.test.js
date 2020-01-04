import React from 'react';
import ForMeListItem from './ForMeListItem';
import { shallow } from 'enzyme';

describe('ForMeListItem', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ForMeListItem />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
