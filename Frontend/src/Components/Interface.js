import React from "react";
import ButtonContainer from "./ButtonContainer";

export default function Interface() {
  return (
    <div>
      {/* <div>
        <Display />
      </div> */}
      {/* Using StrictMode to activate additional checks and warningS */}
      <React.StrictMode>
        <div>
          <ButtonContainer />
        </div>
      </React.StrictMode>
    </div>
  );
}
