import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import GuessedWords from "./components/guessedWords/GuessedWords";
import Congrats from "./components/congrats/Congrats";
import Input from "./components/input/input";
import { getSecretWord } from "./actions";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Jotto</h1>
          <Congrats success={this.props.success} />
          <Input />
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

export default connect(mapStateToProps, { getSecretWord })(App);
