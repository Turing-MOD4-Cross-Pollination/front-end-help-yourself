import React from 'react';
import ForMeScreen from './ForMeScreen';
import { shallow } from 'enzyme';

describe('ForMeScreen', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ForMeScreen />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
