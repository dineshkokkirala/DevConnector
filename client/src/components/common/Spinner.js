import React from "react";
import spinner1 from "./spinner1.gif";

function Spinner() {
  return (
    <div>
      <img
        src={spinner1}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}

export default Spinner;
