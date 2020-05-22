import React from "react";

const Square = (props) => {
  var piece = props.piece.charAt(0);
  return (
    <button type="button" id={props.color}>
      {piece}
    </button>
  );
};

export default Square;
