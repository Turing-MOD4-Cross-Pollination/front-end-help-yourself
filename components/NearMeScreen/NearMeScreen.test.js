// import React from 'react';
// import renderer from 'react-test-renderer';
// import { mount, shallow } from 'enzyme';
// import NearMeScreen from './NearMeScreen';
// import 'babel-polyfill';

// jest.mock('react-native', () => ({
//   Platform: () => ({
//     OS: 'iOS',
//   }),
//   StyleSheet: () => ({
//     create: jest.fn(),
//   }),
// }));

// jest.mock('react-native-maps', () => ({
//   UIManager: () => ({
//     OS: 'iOS',
//   }),
// }));

// describe('NearMeScreen', () => {
//   it('renders correctly', () => {
//     const tree = renderer.create(<NearMeScreen />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

// describe('NearMeScreen', () => {
//   let Platform;
//   beforeEach(() => {
//     Platform = require('react-native').Platform;
//     Platform.OS = 'ios';
//   });

//   it('renders correctly', () => {
//     const wrapper = shallow(<NearMeScreen />);
//     expect(wrapper).toMatchSnapshot();
//   });
// });

import React from 'react';
import { shallow } from 'enzyme';

import NearMeScreen from './NearMeScreen';

// const Platform = require('react-native');

// Platform.OS = 'ios';

jest.mock('expo-location', () => ({
  UIManager: () => ({
    OS: 'iOS',
  }),
}));

jest.mock('expo-permissions', () => ({
  UIManager: () => ({
    OS: 'iOS',
  }),
}));

describe('NearMeScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NearMeScreen />);
  });

  it('App should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
