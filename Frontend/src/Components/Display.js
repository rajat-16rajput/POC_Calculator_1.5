import React from "react";

export default function Display(props) {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("input", { type: "text", value: props.value })
  // );

  //Actually the code below internally gets converted to the code above.

  return (
    <div>
      <input type="text" value={props.value} />
    </div>
  );
}
