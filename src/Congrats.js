import React from "react";
import PropTypes from "prop-types";

export default function Congrats(props) {
  return (
    <>
      {props.success && (
        <div data-test="congratsComponent" className="alert alert-success">
          <span data-test="congratsMessage">
            Congratulations you guessed the word!
          </span>
        </div>
      )}
      {!props.success && <div data-test="congratsComponent"></div>}
    </>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
