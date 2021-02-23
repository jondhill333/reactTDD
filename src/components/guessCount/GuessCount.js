import React from "react";
import PropTypes from "prop-types";

export default function GuessCount(props) {
  return (
    <>
      {props.guessedWords.length !== 0 && (
        <div data-test="component">
          <span data-test="componentWording">Total guesses:</span>{" "}
          <span data-test="guessCount">{props.guessedWords.length}</span>
        </div>
      )}
      {props.guessedWords.length === 0 && <div data-test="component"></div>}
    </>
  );
}
