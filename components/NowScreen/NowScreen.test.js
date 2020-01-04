import React from 'react';
import NowScreen from './NowScreen';
import { shallow } from 'enzyme';

describe('NowScreen', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NowScreen />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
