import React, { useState } from "react";

function Function() {
  const [emp, setEmp] = useState([
    {
      id: 10,
      name: "Durga",
      age: 30,
    },
  ]);

  const Emp = emp.map((val) => {
    return (
      <>
        <ol>
          <li>{val.id}</li>
          <li>{val.name}</li>
          <li>{val.age}</li>
        </ol>
      </>
    );
  });

  function ChangeData() {
    setEmp([
      {
        id: 101,
        name: "Durga Mohapatra",
        age: 50,
      },
    ]);
  }

  return (
    <div>
      <h2>State In Function Component</h2>
      <h3>{Emp}</h3>
      <button onClick={ChangeData}>Click</button>
    </div>
  );
}

export default Function;
