import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};
test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttribute(wrapper, "component");
    expect(component.length).toBe(1);
  });

  test("renders instructions to gess a word", () => {
    const instructions = findByTestAttribute(wrapper, "instructions");
    expect(instructions.text().length).not.toBe(0);
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

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttribute(wrapper, "guessedWords");
    expect(guessedWordsNode.length).toBe(1);
  });

  test("displays correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttribute(wrapper, "guessedWord");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
