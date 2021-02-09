import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "./Congrats";
import { findByTestAttribute } from "../test/testUtils";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "componentCongrats");
  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, "componentCongrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats mesage when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const congratsMessage = findByTestAttribute(wrapper, "congratsMessage");
  expect(congratsMessage.text().length).not.toBe(0);
});
