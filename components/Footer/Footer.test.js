import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Footer />);
	});

	it('App should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
