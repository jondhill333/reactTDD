import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "./Congrats";
import { findByTestAttribute, checkProps } from "../test/testUtils";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttribute(wrapper, "congratsComponent");
  expect(congratsComponent.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttribute(wrapper, "congratsComponent");
  expect(congratsComponent.text()).toBe("");
});

test("renders non-empty congrats mesage when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const congratsMessage = findByTestAttribute(wrapper, "congratsMessage");
  expect(congratsMessage.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
