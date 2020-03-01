import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import {findByTestAttr} from "./test/testHelpers";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props={}, state=null)  => {
  return shallow(<App {...props} />)
};

test('renders without error', () => {
  const wrapper = setup();
  const AppComponent = findByTestAttr(wrapper, 'component-app');
  expect(AppComponent.length).toBe(1);
});
test('renders input window', () => {
  const wrapper = setup();
  const InputComponent = findByTestAttr(wrapper, 'component-input');
  expect(InputComponent.length).toBe(1);
});
test( 'renders output window', () => {
  const wrapper = setup();
  const OutputComponent = findByTestAttr(wrapper, 'component-output');
  expect(OutputComponent.length).toBe(1);
});
test('markdownText starts empty', () => {

});