import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Display from "./Display";
import Button from "./Button";

//FUNCTIONAL COMPONENTS HAVE BEEN USED IN THE PROJECT
export default function ButtonContainer(input_num) {
  //USE OF REACT'S useState HOOK
  let [displayString, setdisplayString] = useState("");
  const navigate = useNavigate();

  const myKeyValues = window.location.search;
  const urlParams = new URLSearchParams(myKeyValues);
  const param1 = urlParams.get("last_calculation");
  //console.log(param1);

  const updateNumber = (input) => {
    setdisplayString(displayString + input);
  };

  const clearString = () => {
    setdisplayString("");
  };

  const calculate = () => {
    let num = eval(displayString);
    setdisplayString(num);
  };

  const getHistory = () => {
    setdisplayString(param1);
    console.log(param1);
  };

  return (
    <div>
      {/* REUSING THE DISPLAY AND BUTTON COMPONENT  */}
      <div>
        <Display value={displayString} />
      </div>

      <div>
        <Button btnValue="1" callBackFunc={updateNumber} />
        <Button btnValue="2" callBackFunc={updateNumber} />
        <Button btnValue="3" callBackFunc={updateNumber} />
        <Button btnValue="+" callBackFunc={updateNumber} />
        <br />
        <Button btnValue="4" callBackFunc={updateNumber} />
        <Button btnValue="5" callBackFunc={updateNumber} />
        <Button btnValue="6" callBackFunc={updateNumber} />
        <Button btnValue="-" callBackFunc={updateNumber} />
        <br />
        <Button btnValue="7" callBackFunc={updateNumber} />
        <Button btnValue="8" callBackFunc={updateNumber} />
        <Button btnValue="9" callBackFunc={updateNumber} />
        <Button btnValue="*" callBackFunc={updateNumber} />
        <br />
        <Button btnValue="AC" callBackFunc={clearString} />
        <Button btnValue="0" callBackFunc={updateNumber} />
        <Button btnValue="=" callBackFunc={calculate} />
        <Button btnValue="/" callBackFunc={updateNumber} />
        <br />

        {/* ROUTING TO THE RESULTS PAGE AFTER THE CLICK EVENT */}
        <button onClick={() => navigate("calculations/results")}>
          View History
        </button>
        <br />
        <Button btnValue="Previous Calculation" callBackFunc={getHistory} />
      </div>
    </div>
  );
}
