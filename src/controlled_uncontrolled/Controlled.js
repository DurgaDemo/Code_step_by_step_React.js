import React, { useState } from "react";

function Controlled() {
  let [val, setVal] = useState("Durga");

  function Change(event) {
    setVal(event.target.value);
  }

  return (
    <div>
      <h2>Controlled Component</h2>
      
      <input type="text" value={val} onChange={Change} />
    </div>
  );
}

export default Controlled;
