import React from "react";
import { shallow, mount, render } from "enzyme";

import { findByTestAttribute, storeFactory } from "../../../test/testUtils";
import Input, { UnconnectedInput } from "./input";

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
      const inputBox = findByTestAttribute(wrapper, "inputBox");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findByTestAttribute(wrapper, "submitButton");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has success piece of state as props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("guessedWord action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("`guessWord` action creator call", () => {
  test("calls `guessWord` on submit button click", () => {
    const guessWordMock = jest.fn();
    const wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);
    const submitButton = findByTestAttribute(wrapper, "submitButton");
    submitButton.simulate("click");
    const guessWordWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordWordCallCount).toBe(1);
  });

  test("guessWord gets passed the textt from  the input", () => {
    const guessWordMock = jest.fn();
    const wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);
    const submitButton = findByTestAttribute(wrapper, "submitButton");
    submitButton.simulate("click");
    const inputBox = findByTestAttribute(wrapper, "inputBox");
  });
});
