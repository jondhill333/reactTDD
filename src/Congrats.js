import React from "react";

export default function Congrats(props) {
  return (
    <>
      {props.success && (
        <div data-test="componentCongrats">
          <span data-test="congratsMessage">
            Congratulations you guessed the word!
          </span>
        </div>
      )}
      {!props.success && <div data-test="componentCongrats"></div>}
    </>
  );
}
