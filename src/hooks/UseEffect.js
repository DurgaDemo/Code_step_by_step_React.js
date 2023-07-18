import React, { useEffect, useState } from 'react'

function UseEffect() {

const [name,setName] =useState([{
    firstName:"Durga",
    age:30
}])


const Change=()=>{
    setName([{
        firstName:"Satya N",
        age:60
    }])
}

useEffect(()=>{
    console.log("UseEffect hooks called");
})


  return (
    <div>UseEffect Hooks
   {/* <h2>My name is {address} and age is {address}</h2> */}

   {
    name.map((val)=>{
        return(
            <div>
                <ol>
                    <li key={val.firstName}>{val.firstName}</li>
                    <li key={val.age}>{val.age}</li>
                </ol>
            </div>
        )
    })
   }

<button onClick={Change}>Click</button>
    </div>
  )
}

export default UseEffect