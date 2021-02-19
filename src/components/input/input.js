import React, { Component } from "react";
import { ReactReduxContext } from "react-redux";

import { guessWord } from "../../actions";

import { connect } from "react-redux";
import Congrats from "../congrats/Congrats";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = { currentGuess: "" };
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }
  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="inputBox"
          className="mb-2 mx-sm-3"
          type="text"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
          placeholder="enter guess"
        />
        <button
          data-test="submitButton"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(e) => this.submitGuessedWord(e)}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
