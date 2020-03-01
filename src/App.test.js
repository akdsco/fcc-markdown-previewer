import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const AppComponent = wrapper.find("[data-test='component-app']");
  expect(AppComponent.length).toBe(1);
});
test('renders input window', () => {

});
test( 'renders output window', () => {

});
test('markdownText starts empty', () => {

});