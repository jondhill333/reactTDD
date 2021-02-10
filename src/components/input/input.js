import React, { Component } from "react";
import { ReactReduxContext } from "react-redux";

import { connect } from "react-redux";

export class Input extends Component {
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

export default connect(mapStateToProps)(Input);
