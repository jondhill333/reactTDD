import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import GuessedWords from "./components/guessedWords/GuessedWords";
import Congrats from "./components/congrats/Congrats";
import NewWord from "./components/newWord/NewWord";
import Input from "./components/input/input";
import { getSecretWord } from "./actions";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Jotto</h1>
          <div>the Secret word is {this.props.secretWord}</div>
          <Congrats success={this.props.success} />
          <Input />
          <NewWord
            display={this.props.success}
            resetAction={this.props.resetGame}
          />
          <GuessedWords guessedWords={this.props.guessedWords} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
