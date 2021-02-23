import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "../../../test/testUtils";
import GuessCount from "./GuessCount";

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<GuessCount {...setupProps} />);
};

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  //   console.log(wrapper.debug());
  test("renders without error", () => {
    const component = findByTestAttribute(wrapper, "component");
    expect(component.length).toBe(1);
    console.log(wrapper.debug());
  });

  test("does not render the guessCount component", () => {
    const guessCount = findByTestAttribute(wrapper, "guessCount");
    expect(guessCount.length).toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;

  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without error", () => {
    const component = findByTestAttribute(wrapper, "component");
    expect(component.length).toBe(1);
  });

  test("renders guess Count section", () => {
    const guessCount = findByTestAttribute(wrapper, "guessCount");
    expect(guessCount.length).toBe(1);
  });

  test("displays correct total guesses in component", () => {
    const guessCount = findByTestAttribute(wrapper, "guessCount");
    expect(guessCount.text()).toBe(guessedWords.length.toString());
  });
});
