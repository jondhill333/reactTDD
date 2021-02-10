import React from "react";
import { shallow, mount, render } from "enzyme";

import { findByTestAttribute, storeFactory } from "../../../test/testUtils";
import { Input } from "./input";

const setup = (intialState = {}) => {
  const store = storeFactory(intialState);
  const wrapper = mount(<Input store={store} />);
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});

    test("renders input box", () => {});
    test("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {});

    test("does not render input box", () => {});
    test("does not render submit button", () => {});
  });
});

describe("", () => {});

test("", () => {});

test("", () => {});
