import React, { Component } from "react";
import { ReactReduxContext } from "react-redux";

import { connect } from "react-redux";

export class Input extends Component {
  render() {
    return (
      <div>
        <button></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
