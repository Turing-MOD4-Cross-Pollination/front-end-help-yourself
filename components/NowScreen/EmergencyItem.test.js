import React from 'react';
import EmergencyItem from './EmergencyItem';
import { shallow } from 'enzyme';

describe('EmergencyItem', () => {
	let wrapper;
	const navigation = { navigate: jest.fn() };

	beforeEach(() => {
		wrapper = shallow(<EmergencyItem navigation={navigation} />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
