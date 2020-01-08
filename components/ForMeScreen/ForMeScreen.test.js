import React from 'react';
import mockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ForMeScreen } from './ForMeScreen';

const store = mockStore();

const allCategories = ['Baby', 'Food'];
const selectedCategories = ['Baby'];
const naviProp = { navigation: { navigate: () => {} } };

describe('ForMeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ForMeScreen allCategories={allCategories} selectedCategories={selectedCategories} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ForMeScreen, Shallow', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(
      <ForMeScreen allCategories={allCategories} selectedCategories={selectedCategories} />,
    );
    expect(wrapper).toMatchSnbapshot();
  });
});
