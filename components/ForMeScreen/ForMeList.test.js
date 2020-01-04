import React from 'react';
import ForMeList from './ForMeList';
import { shallow } from 'enzyme';

describe('ForMeList', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ForMeList />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
