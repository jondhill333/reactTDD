import React, { Component } from "react";
import { ReactReduxContext } from "react-redux";

import { guessWord } from "../../actions";

import { connect } from "react-redux";
import Congrats from "../congrats/Congrats";

export class UnconnectedInput extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="inputBox"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submitButton"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={() => this.props.guessWord("train")}
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
