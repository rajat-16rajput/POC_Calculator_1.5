import React from "react";

//PASSING props AMONG COMPONENTS
const Button = (props) => {
  let onClickHandler = () => {
    props.callBackFunc(props.btnValue);
    console.log(props);
    // alert("Hello!");
  };

  return <button onClick={onClickHandler}>{props.btnValue}</button>;
};

export default Button;
