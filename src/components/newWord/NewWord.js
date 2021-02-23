import React from "react";
import PropTypes from "prop-types";

export default function NewWord(props) {
  function handleClick(e) {
    e.preventDefualt();
    console.log("clicked");
  }
  if (props.display) {
    return (
      <button
        data-test="component"
        className="btn btn-primary spacer-bottom"
        onClick={(e) => handleClick}
      >
        New word
      </button>
    );
  } else {
    return <div data-test="component" />;
  }
}

NewWord.propTypes = {
  display: PropTypes.bool.isRequired,
  resetAction: PropTypes.func,
};
