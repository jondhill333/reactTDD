import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App1";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */

const findByTestAttribute = (wrapper, val) => {
  wrapper.find(`[data-test='${val}']`);
};

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

describe("increment button", () => {
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
});

describe("decrement button", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const decrementButton = findByTestAttribute(wrapper, "decrementButton");
    expect(decrementButton.length).toBe(1);
  });

  test(" when state is greater than 0 clicking on the decrement button decrements the display", () => {
    const wrapper = setup();

    const incrementButton = findByTestAttribute(wrapper, "incrementButton");
    incrementButton.simulate("click");

    const decrementButton = findByTestAttribute(wrapper, "decrementButton");
    decrementButton.simulate("click");

    const count = findByTestAttribute(wrapper, "count").text();
    expect(count).toBe("0");
  });
});

describe("error when counter goes below 0", () => {
  test("error does not show when not needed", () => {
    const wrapper = setup();

    const errorDiv = findByTestAttribute(wrapper, "error-message");

    const errorhasHiddenClass = errorDiv.hasClass("hidden");
    // console.log(wrapper.debug());
    expect(errorhasHiddenClass).toBe(true);
  });

  describe("counter is 0 and decrement is clicked", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();
      const button = findByTestAttribute(wrapper, "decrementButton");
      button.simulate("click");
    });
    test("error shows", () => {
      const errorDiv = findByTestAttribute(wrapper, "error-message");
      const errorHasHiddenClass = errorDiv.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(false);
    });
    test("counter still displays 0", () => {
      const count = findByTestAttribute(wrapper, "count").text();
      expect(count).toBe("0");
    });
    test("clicking increment clears the error", () => {
      // find and click the increment button
      const incButton = findByTestAttribute(wrapper, "increment-button");
      incButton.simulate("click");

      // check the class of the error message
      const errorDiv = findByTestAttribute(wrapper, "error-message");
      const errorHasHiddenClass = errorDiv.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});
