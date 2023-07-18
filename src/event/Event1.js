import React, { useState } from "react";

function Event1() {
  const [emp, setEmp] = useState([
    {
      id: 10,
      name: "Durga",
      age: 30,
    },
  ]);

  function Change() {
    setEmp([
      {
        id: 101,
        name: "Durga Mohapatra",
        age: 40,
      },
    ]);
  }

  return (
    <div>
      <h2>Events in React</h2>
      {emp.map((val) => {
        return (
          <>
            <ul>
              <li>Id:{val.id}</li>
              <li>My Name is {val.name} </li>
              <li>and age is {val.age}</li>
            </ul>
            {/* <h4 key={val.id}>Id:{val.id} My Name is {val.name} and age is {val.age}</h4> */}
            <button onClick={Change}>Click</button>
          </>
        );
      })}
    </div>
  );
}

export default Event1;
