import { getLetterMatchCount } from "./";

// that it returns correct count when no matching letters
// that it returns correct count when some matching letters
// that it returns correct count when there are duplicate ...
// ... letters in the guessed word matching letters

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("returns correct count when no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("that it returns correct count when some matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test(
    "that it returns correct count when there are duplicate" +
      " letters in the guessed word matching letters",
    () => {
      const letterMatchCount = getLetterMatchCount("parka", secretWord);
      expect(letterMatchCount).toBe(3);
    }
  );
});
