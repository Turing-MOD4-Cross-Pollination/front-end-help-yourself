import React from 'react';
import NearMeScreen from './NearMeScreen';
import { shallow } from 'enzyme';

describe('NearMeScreen', () => {
	let wrapper;
	let navigation = jest.fn();

	beforeEach(() => {
		wrapper = shallow(<NearMeScreen navigation={navigation} />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
