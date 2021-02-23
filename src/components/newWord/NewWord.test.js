import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute } from "../../../test/testUtils";
import NewWord from "./NewWord";

const defaultProps = { display: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWord {...setupProps} />);
};

describe("render", () => {
  test("renders component without error", () => {
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, "component");
    expect(component.length).toBe(1);
  });

  test("renders no text when `display` prop is false", () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttribute(wrapper, "component");
    expect(component.text()).toBe("");
  });

  test("renders non-empty text when `display` prop is true", () => {
    const wrapper = setup({ display: true, resetAction: () => {} });
    const component = findByTestAttribute(wrapper, "component");
    expect(component.text().length).not.toBe(0);
  });

  test("calls `resetAction` prop upon button click", () => {
    // create a mock function so we can see whether it's called on click
    const resetActionMock = jest.fn();
    const wrapper = setup({ display: true, resetAction: resetActionMock });

    // find the button (which is the top level element of this component)
    const resetButton = findByTestAttribute(wrapper, "component");
    resetButton.simulate("click");

    // expect the mock to have been called once
    expect(resetActionMock.mock.calls.length).toBe(1);
  });
});
