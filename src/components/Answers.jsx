import React from "react";
import Timer from "./Timer";

function Answers({ text, setclr, colors, code, handleColor }) {

  return (

    <div style={{ backgroundColor: colors }} onClick={() => handleColor(code)}>
      {text[0]}

    </div>
  );
}

export default Answers;
