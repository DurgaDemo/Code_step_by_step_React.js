import React, { useEffect, useState } from "react";

function UseEffect2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  const Multiplay = () => {
    setCount2(count2 * 2);
  };


  useEffect(()=>{
    console.log("UseEffect Called");
  },[count2])

  return (
    <div>
      UseEffect2  <br/>
      <button onClick={Decrease}>Decrease</button>
      {count}
      <button onClick={Increase}>Increase</button>
      {count2}
      <button onClick={Multiplay}>Multiplay</button>
    </div>
  );
}

export default UseEffect2;
