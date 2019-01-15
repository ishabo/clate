import React from 'react';
import Splash from './Splash';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Splash onAppStart={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
