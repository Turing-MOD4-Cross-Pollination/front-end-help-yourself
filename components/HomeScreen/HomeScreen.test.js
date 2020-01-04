import React from 'react';
import HomeScreen from './HomeScreen';
import { shallow } from 'enzyme';

describe('HomeScreen', () => {
	let wrapper;
	const navigation = { navigate: jest.fn() };

	beforeEach(() => {
		wrapper = shallow(<HomeScreen navigation={navigation} />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
