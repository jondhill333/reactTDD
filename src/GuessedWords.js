import React from "react";
import PropTypes from "prop-types";

export default function GuessedWords(props) {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="instructions">Try to guess the secret word</span>
    );
  }
  return <div data-test="component">{contents}</div>;
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
