import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("renders learn react link", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "componentApp");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, "incrementButton");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counter = findByTestAttribute(wrapper, "counterDisplay");
  expect(counter.length).toBe(1);
});
test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe("0");
});
test("clicking on button increments counter display", () => {
  // find the button
  const wrapper = setup();
  const button = findByTestAttribute(wrapper, "incrementButton");

  //click the button
  button.simulate("click");

  // find the display and test that the number has been incremented
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe("1");
});

test("renders decrement button", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttribute(wrapper, "decrementButton");
  expect(decrementButton.length).toBe(1);
});

test("clicking on the decrement button decreasements the display", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttribute(wrapper, "decrementButton");
  decrementButton.simulate("click");
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe("-1");
});
