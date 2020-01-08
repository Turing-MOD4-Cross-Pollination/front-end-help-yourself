import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
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

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const navigation = jest.fn();

    const tree = renderer.create(<HomeScreen navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
