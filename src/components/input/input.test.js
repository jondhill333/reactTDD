import React from "react";
import { shallow, mount, render } from "enzyme";

import { findByTestAttribute, storeFactory } from "../../../test/testUtils";
import Input from "./input";

const setup = (intialState = {}) => {
  const store = storeFactory(intialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test("renders component without error", () => {
      const component = findByTestAttribute(wrapper, "input");
      expect(component.length).toBe(1);
    });

    test("renders input box", () => {
      const inputBox = findByTestAttribute(wrapper, "inputBox");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttribute(wrapper, "submitButton");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttribute(wrapper, "input");
      expect(component.length).toBe(1);
    });

    test("does not render input box", () => {
      console.log(wrapper.debug());
      const inputBox = findByTestAttribute(wrapper, "inputBox");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findByTestAttribute(wrapper, "submitButton");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("", () => {});

test("", () => {});

test("", () => {});
