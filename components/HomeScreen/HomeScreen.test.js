import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from './HomeScreen';

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
