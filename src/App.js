import React, { Component } from "react";
import "./App.css";
import GuessedWords from "./components/guessedWords/GuessedWords";
import Congrats from "./components/congrats/Congrats";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Jotto</h1>
          <Congrats success={true} />
          <GuessedWords
            guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
          />
        </div>
      </>
    );
  }
}

export default App;
